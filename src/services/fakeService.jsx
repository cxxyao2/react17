export function getMovies() {
  return [
    { title: "fur1", Genre: "action", stock: 12, rate: 12.5, liked: true },
    { title: "fur2", Genre: "action", stock: 13, rate: 2.5, liked: false  },
    { title: "fur3", Genre: "action", stock: 24, rate: 2.5, liked: false },
    { title: "fur4", Genre: "romantic", stock: 12, rate: 2.5, liked: false },
    { title: "fur5", Genre: "romantic", stock: 113, rate: 2.5, liked: false },
    { title: "fur6", Genre: "action", stock: 114, rate: 22.5, liked: true },
    { title: "fur7", Genre: "action", stock: 14, rate: 45.5, liked: false },
    { title: "fur8", Genre: "violent", stock: 54, rate: 22.5, liked: false },
    { title: "fur9", Genre: "action", stock: 14, rate: 2.5, liked: true }
  ];
}

export function getGenres() {
  return [
    { id: "1", name: "action"},
    { id: "2", name: "romantic"},
    { id: "3", name: "violent"},
    { id: "4", name: "imaginative"},
  ];
}