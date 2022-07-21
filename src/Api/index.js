const Planets = {
  Get: (id) =>
    fetch(`https://swapi.dev/api/planets/?page=${id}&format=json`).then(
      (resp) => {
        if (resp.status !== 200) {
          throw new Error(resp.status);
        }
        return resp.json();
      }
    ),
};

export default Planets;
