export default class Api {
  static url = `http://localhost:3001`;

  static getPeople = () => {
    return new Promise(async (res, rej) => {
      const result = await fetch(`${Api.url}/people`);
      if (result.status === 200) {
        res(await result.json());
      } else {
        rej(await result.json());
      }
    });
  };
}
