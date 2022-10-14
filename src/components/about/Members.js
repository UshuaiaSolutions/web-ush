export const members = [
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Pablo%20Broardo.jpg",
    name: "Pablo",
    lastname: "Boardo",
    country: "LATAM",
    job: "Co-Founder and",
    job_last: "managing partner",
  },
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Sebastian%20Seara.jpg",
    name: "Sebastián",
    lastname: "Seara",
    country: "LATAM",
    job: "Co-Founder and",
    job_last: " managing partner",
  },
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Agustina%20DiPratula.jpg",
    name: "Agustina",
    lastname: " Di Pratula",
    country: "LATAM",
    job: "Business Development",
    job_last: " Manager",
  },
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Cristina%20Lamas.jpg",
    name: "Cristina",
    lastname: " Lamas",
    country: "LATAM",
    job: "Administration",
    job_last: " Manager",
  },
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Pamela%20Parra.jpg",
    name: "Pamela",
    lastname: " Parra",
    country: "LATAM",
    job: "Operations",
    job_last: " Manager",
  },
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Ester%20Griera.jpg",
    name: "Ester",
    lastname: " Griera",
    country: "EUR",
    job: "Operations",
    job_last: " Manager",
  },
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Flavia%20Cogliano.jpg",
    name: "Flavia",
    lastname: " Cogliano",
    country: "LATAM",
    job: "Expert",
    job_last: " Team Leader",
  },
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Gaspar%20Guardia.jpg",
    name: "Gaspar",
    lastname: " Guardia",
    country: "LATAM",
    job: "Senior",
    job_last: " Team Leader",
  },
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Susana%20Vignale.jpg",
    name: "Susana",
    lastname: " Vignale",
    country: "EUR",
    job: "Team Leader",
  },
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Edwin%20Mu%C3%B1oz.jpg",
    name: "Edwin",
    lastname: " Muñóz",
    country: "LATAM",
    job: "Team Leader",
    job_last: " Associate",
  },
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Sebastian%20Hadjidimitris.jpg",
    name: "Sebastián",
    lastname: " Hadjidimitris",
    country: "LATAM",
    job: "Team Leader",
    job_last: " Associate",
  },
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Sofia%20Elmo.jpg",
    name: "Sofía",
    lastname: " Elmo",
    country: "LATAM",
    job: "Team Leader",
    job_last: " Associate",
  },
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Camila%20Ronnau.jpg",
    name: "Camila",
    lastname: " Rönnau",
    country: "LATAM",
    job: "Team Leader",
    job_last: " Junior",
  },
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Valentina%20Molinari.jpg",
    name: "Valentina",
    lastname: " Molinari",
    country: "LATAM",
    job: "Team Leader",
    job_last: " Junior",
  },
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Clara%20Hidalgo.png",
    name: "Clara",
    lastname: " Hidalgo",
    country: "EUR",
    job: "Team Leader",
    job_last: " Junior",
  },
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Julieta%20Cortopassi.jpg",
    name: "Julieta",
    lastname: " Cortopassi",
    country: "LATAM",
    job: "Vendor Manager",
    job_last: " and HR",
  },
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Galia%20Mauro.jpg",
    name: "Galia",
    lastname: " Mauro",
    country: "LATAM",
    job: "Visual Brand",
    job_last: " Designer",
  },
  {
    image:
      "https://ushmultimedia.blob.core.windows.net/fotosushteam/Malen%20D'Urso.jpg",
    name: "Malen",
    lastname: " D'Urso",
    country: "LATAM",
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
