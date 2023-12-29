// pobranie MODEL dla samochodu
const Plane = require('../models/plane');

// lista z bazy dancyh adres: localhost:3000/planes
exports.planes_get_all = (req, res, next) => {
  Plane.find()
  .then((result)=> {
    res.status(200).json({
      wiadomosc: 'Lista wszystkich samochodów',
      info: result,
    })
  })
  .catch((err) => res.status(500).json(err));
};

// dodanie wpisu do listy z adresu localhost:3000/planes
exports.planes_add_new = (req, res, next) => {
  const plane = new Plane({
    producent: req.body.producent,
    model: req.body.model,
    rok: req.body.rok,
  });
  plane
    .save()
    .then((result) => {
      res.status(201).json({wiadomosc: 'Dodanie nowego samochodu', info: result,});
  })
  .catch((err) => res.status(500).json(err));
};

// wyświetlenie pojedynczego psisu po jego ID localhost:3000/planes/<planeId>
exports.planes_get_by_id = (req, res, next) => {
  const id = req.params.planeId;
  Plane.findById(id)
  .then((result) => {
    res.status(200).json({ wiadomosc: 'Szczegóły samochodu o numerze ' + id, info: result,});
  })
.catch((err) => res.status(500).json(err));
};

// Uaktualnienie wpisu localhost:3000/planes/<planeId>
exports.plane_change = (req, res, next) => {
  const id = req.params.planeId;
  Plane.findByIdAndUpdate(id, {
    producent: req.body.producent,
    model: req.body.model,
    rok: req.body.rok,
  })
    .then(() => {
      res
        .status(200)
        .json({ wiadomosc: 'Zmieniono dane samochodu o numerze ' + id });
    })
    .catch((err) => res.status(500).json(err));
};

// Usunięcie wpisu localhost:3000/planes/<planeId>
exports.planes_delete = (req, res, next) => {
  const id = req.params.planeId;
  Plane.findByIdAndDelete(id)
    .then(() => {
      res.status(200).json({ wiadomosc: 'Usunięto samochód o numerze ' + id });
    })
    .catch((err) => res.status(500).json(err));
};