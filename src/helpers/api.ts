export default class Api {
  static url: string = `http://localhost:3001`;

  static request = (status: number, link: string, options?: object) => {
    return new Promise(async (res, rej) => {
      const result = await fetch(link, options);
      if (result.status === status) {
        res(await result.json());
      } else {
        rej(await result.json());
      }
    });
  };

  static getPeople = () => Api.request(200, `${Api.url}/people`);

  static getUserDetails = (id: number) => Api.request(200, `${Api.url}/people/${id}`);

  static setNewUser = (data: any[]) =>
    Api.request(201, `${Api.url}/people`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

  static editUser = (data: any[], id: number) =>
    Api.request(200, `${Api.url}/people/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

  static removeUser = (id: number) =>
    Api.request(200, `${Api.url}/people/${id}`, {
      method: 'DELETE',
    });
}
