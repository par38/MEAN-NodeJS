const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

// const connectDB = require('../config/db')
const db = require('../config/db')

const { EmployeeModel } = require('../models/employeeModel')



router

  // //////////    localhost:3003/employees
  // //////////    GET ALL
  .get('/', (req, res) => {

    // +++++++++++++++++++++++++++ FONCTIONNE
    //   EmployeeModel.find()
    //     .then(employeesList => res.status(200)
    //       .json(employeesList))
    //     .catch(err => res.status(500).json({ error: err }))
    // })

    // ++++++++++++ mon GET preferé ! +++++++++++++++++++++++
    EmployeeModel.find((err, employeesList) => {
      if (err) {
        res.send(err)
      }
      res.status(200).send(employeesList)
    })
  })

  // //////////    localhost:3003/employees/5dee20441c91064a97159a33
  // //////////    GET SINGLE EMPLOYEE
  .get('/:id', (req, res) => {
    EmployeeModel.findById(
      req.params.id, (err, singleEmp) => {
        if (err) { res.send(`L'employé demandé n'existe pas`) }
        res.send(singleEmp)
      }
    )
  })

  // //////////    localhost:3003/employees/add
  // //////////    POST single employee
  .post('/add', (req, res) => {
    // +++++++++++++++++++++++++++ FONCTIONNE
    // ++++++++ req.body détaillé ++++++++++++
    // let emp = new EmployeeModel({
    //   name: req.body.name,
    //   position: req.body.position,
    //   office: req.body.office,
    //   salary: req.body.salary
    // })

    // +++++++++++++++++++++++++++ FONCTIONNE
    // ++++++++ req.body global ++++++++++++
    // ++++++++ en front-end, formulaire : name, position, office, salary
    let emp = new EmployeeModel(req.body)

    emp.save((err) => {
      if (err) { res.send(err) }
      res.status(200).send(emp)
    })

    // - ++++++++++++++++++++++++++ ne FONCTIONNE pas
    // ++++++++ req.body global ++++++++++++
    // ++++++++ en front-end, formulaire : name, position, office, salary
    // ++++++++ .insertOne() ++++++++++++

    // EmployeeModel.insertOne(newEmp, (err) => {
    //   if (err) {
    //     res.send(err)
    //   }
    //   newEmp(req.body).save()
    //   res.json(newEmp)
    // }
    // )
  })


  // //////////    faire un get avant, de façon à avoir les champs préremplis et ne pas effacer les données pas modifiées

  // //////////    PUT findById
  // //////////    localhost:3003/employees/modifier/5dee6e7291b56a6ee9a6bcef
  // ++++++++ en front-end, formulaire : name, position, office, salary
  .put('/modifier/:id', (req, res) => {
    // +++++++++++++++++++++++++++ FONCTIONNE
    EmployeeModel.findById(req.params.id, (err, empPut) => {
      if (err) { res.send(err) }
      empPut.name = req.body.name
      empPut.position = req.body.position
      empPut.office = req.body.office
      empPut.salary = req.body.salary
      empPut.save((err) => {
        if (err) { res.send(err) }
        res.json(empPut)
      })
    })
  })

  // //////////    PUT updateOne
  // //////////    localhost:3003/employees/name/jacques
  // //////////    params: name + formulaire : position
  .put('/modifier/name/:name', (req, res) => {
    // +++++++++++++++++++++++++++ FONCTIONNE
    EmployeeModel.updateOne({ name: req.params.name }, { position: req.body.position }, (err, updatedEmp) => {
      if (err) { res.send(err) }
      res.status(200).send(`Position de ${req.params.name} modifiée`)
    })
  })

  // //////////    DELETE 
  // //////////    deleteOne
  // //////////    params: id
  // +++++++++++++++++++++++++++ FONCTIONNE
  .delete('/supprimer/:id', (req, res) => {
    idToDelete = req.params.id
    // console.log(idToDelete) { id: '5ded12e2a60d11233bca2fb8' }
    EmployeeModel.findByIdAndDelete(idToDelete, (err) => {
      if (err) { res.send(err) }
      res.send('Employé supprimé')
    })
  })

  // //////////    findOneAndDelete
  // //////////    localhost:3003/employees/name/jacques
  // //////////    params: name
  // +++++++++++++++++++++++++++ FONCTIONNE
  .delete('/supprimer/name/:name', (req, res) => {
    EmployeeModel.deleteOne({ name: req.params.name }, (err) => {
      if (err) { res.send(err) }
      res.send('Employé supprimé')
    })
  })

module.exports = router