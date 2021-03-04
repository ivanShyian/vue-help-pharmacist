export function secondWordAfterAge(age) {
  if (age < 21 && age > 4) {
    return `${age} років`
  } else if (age < 5 && age > 1) {
    return `${age} роки`
  }
  return `${age} рік`
}
