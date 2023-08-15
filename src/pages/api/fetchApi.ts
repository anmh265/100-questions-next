export async function fetchApi(name: string) {
  const res = await fetch("../../../public/Data/data.json");
  if (!res.ok) {
    return {
      name,
    };
  }
  const data = await res.json();

  return data.students;
}
