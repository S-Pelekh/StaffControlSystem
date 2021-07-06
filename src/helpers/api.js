export default class Api {
  static url = `http://localhost:3001`

  static getPeople = () => {
    return new Promise(async (res, rej) => {
      const result = await fetch(`${Api.url}/people`)
      if (result.status === 200) {
        res(await result.json())
      } else {
        rej(await result.json())
      }
    })
  }
  static getUserDetails = (id) => {
    return new Promise(async (res, rej) => {
      const result = await fetch(`${Api.url}/people/${id}`)
      if (result.status === 200) {
        res(await result.json())
      } else {
        rej(await result.json())
      }
    })
  }
  static setNewUser = (data) => {
    return new Promise(async (res, rej) => {
      const result = await fetch(`${Api.url}/people`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      if (result.status === 201) {
        res(await result.json())
      } else {
        rej(await result.json())
      }
    })
  }
  static editUser = (data, id) => {
    return new Promise(async (res, rej) => {
      const result = await fetch(`${Api.url}/people/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      if (result.status === 200) {
        res(await result.json())
      } else {
        rej(await result.json())
      }
    })
  }
  static removeUser = (id) => {
    return new Promise(async (res, rej) => {
      const result = await fetch(`${Api.url}/people/${id}`, {
        method: 'DELETE',
      })
      if (result.status === 200) {
        res(await result.json())
      } else {
        rej(await result.json())
      }
    })
  }
}
