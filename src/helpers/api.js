export default class Api {
  static getPeople = () => {
    return new Promise(async (res, rej) => {
      const result = await fetch(`http://localhost:3000/people`);
      if (result.status === 200) {
        res(await result.json());
      } else {
        rej(await result.json());
      }
    });
  };
}
