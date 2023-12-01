
const useFetch = async (url) => {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDU5ZjcyNmM5YjAzMmI4OTVmODQ3NGI2YTNjOWQyNCIsInN1YiI6IjY1NTM2M2U3OTY1M2Y2MTNmM2I3NWY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BbCV1r679IUchfcGUm1MVtScl6M0ox0Zl8csbF6Mo5M'
    }
  };

  try {
    const response = await fetch(url, options)
    const json = await response.json();
    return json

  } catch (err) {
    return err
  }
}

export default useFetch