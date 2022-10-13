export const members = [
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Pablo%20Broardo.jpg",
    name: "Pablo",
    lastname: "Boardo",
    country: "ARG",
    job: "Co-Founder and",
    job_last: "managing partner",
  },
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Sebastian%20Seara.jpg",
    name: "Sebastián",
    lastname: "Seara",
    country: "ARG",
    job: "Co-Founder and",
    job_last: " managing partner",
  },
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Agustina%20DiPratula.jpg",
    name: "Agustina",
    lastname: " Di Pratula",
    country: "ARG",
    job: "Business Development",
    job_last: " Manager",
  },
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Cristina%20Lamas.jpg",
    name: "Cristina",
    lastname: " Lamas",
    country: "ARG",
    job: "Administration",
    job_last: " Manager",
  },
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Pamela%20Parra.jpg",
    name: "Pamela",
    lastname: " Parra",
    country: "ARG",
    job: "Operations",
    job_last: " Manager",
  },
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Ester%20Griera.jpg",
    name: "Ester",
    lastname: " Griera",
    country: "ESP",
    job: "Operations",
    job_last: " Manager",
  },
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Flavia%20Cogliano.jpg",
    name: "Flavia",
    lastname: " Cogliano",
    country: "ARG",
    job: "Expert",
    job_last: " Team Leader",
  },
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Pablo%20Broardo.jpg",
    name: "Gaspar",
    lastname: " Guardia",
    country: "ARG",
    job: "Senior",
    job_last: " Team Leader",
  },
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Susana%20Vignale.jpg",
    name: "Susana",
    lastname: " Vignale",
    country: "ARG",
    job: "Team Leader",
  },
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Edwin%20Mu%C3%B1oz.jpg",
    name: "Edwin",
    lastname: " Muñóz",
    country: "ARG",
    job: "Team Leader",
    job_last: " Associate",
  },
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Sebastian%20Hadjidimitris.jpg",
    name: "Sebastián",
    lastname: " Hadjidimitris",
    country: "ARG",
    job: "Team Leader",
    job_last: " Associate",
  },
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Sofia%20Elmo.jpg",
    name: "Sofía",
    lastname: " Elmo",
    country: "ARG",
    job: "Team Leader",
    job_last: " Associate",
  },
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Camila%20Ronnau.jpg",
    name: "Camila",
    lastname: " Rönnau",
    country: "ARG",
    job: "Team Leader",
    job_last: " Junior",
  },
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Valentina%20Molinari.jpg",
    name: "Valentina",
    lastname: " Molinari",
    country: "ARG",
    job: "Team Leader",
    job_last: " Junior",
  },
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Clara%20Hidalgo.png",
    name: "Clara",
    lastname: " Hidalgo",
    country: "ESP",
    job: "Team Leader",
    job_last: " Junior",
  },
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Julieta%20Cortopassi.jpg",
    name: "Julieta",
    lastname: " Cortopassi",
    country: "ARG",
    job: "Vendor Manager",
    job_last: " and HR",
  },
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Galia%20Mauro.jpg",
    name: "Galia",
    lastname: " Mauro",
    country: "ARG",
    job: "Visual Brand",
    job_last: " Designer",
  },
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Malen%20D'Urso.jpg",
    name: "Malen",
    lastname: " D'Urso",
    country: "ARG",
    job: "Community",
    job_last: " Manager",
  },
];

export const group = (items, n) =>
  items.reduce((acc, x, i) => {
    const idx = Math.floor(i / n);
    acc[idx] = [...(acc[idx] || []), x];
    return acc;
  }, []);
