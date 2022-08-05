import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Modals from "./components/Modals";
import Table from "./components/Table";
import axios from "axios";
import Toast from "./components/Toast";


const modalInitialState = { type: '', userId: '' }

export default function App() {
  const [modal, setModal] = useState(modalInitialState)
  const [users, setUsers] = useState()
  const [loading, setLoading] = useState(true)
  const [toastMsg, setToastMsg] = useState()

  const fetchUsers = () => {
    axios.get('/users')
      .then(response => setUsers(response.data))
      .catch(console.error)
      .finally(() => setLoading(false))
  }

  useEffect(() => () => setLoading(false), [])


  return (
    <>
      <Nav />
      <Toast message={toastMsg} />
      <Table
        setModal={setModal}
        users={users}
        fetchUsers={fetchUsers}
        loading={loading}
      />
      <Modals
        handleClose={() => setModal(modalInitialState)}
        setToastMsg={setToastMsg}
        modal={modal}
        refetch={fetchUsers}
      />
    </>
  );
}

