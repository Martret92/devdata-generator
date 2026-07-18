import { fakerES as faker } from '@faker-js/faker'

const courses = [
  'Desarrollo Web',
  'Administración de Sistemas',
  'Marketing Digital',
  'Diseño Gráfico',
  'Ciencia de Datos',
]

function getDateYearsAgo(years) {
  const date = new Date()
  date.setFullYear(date.getFullYear() - years)
  return date
}

function formatDate(date) {
  return date.toISOString().slice(0, 10)
}

function generatePersonFields(selectedFields) {
  const record = {}
  const needsEmail = selectedFields.includes('email')
  const needsNombre = selectedFields.includes('nombre') || needsEmail
  const needsApellidos = selectedFields.includes('apellidos') || needsEmail
  const nombre = needsNombre ? faker.person.firstName() : undefined
  const apellidos = needsApellidos ? faker.person.lastName() : undefined

  if (selectedFields.includes('nombre')) {
    record.nombre = nombre
  }

  if (selectedFields.includes('apellidos')) {
    record.apellidos = apellidos
  }

  if (needsEmail) {
    record.email = faker.internet.email({
      firstName: nombre,
      lastName: apellidos,
      provider: 'example.com',
    })
  }

  return record
}

function generateUser(selectedFields) {
  const record = generatePersonFields(selectedFields)

  if (selectedFields.includes('telefono')) {
    record.telefono = faker.phone.number()
  }

  if (selectedFields.includes('edad')) {
    record.edad = faker.number.int({ min: 18, max: 80 })
  }

  if (selectedFields.includes('ciudad')) {
    record.ciudad = faker.location.city()
  }

  if (selectedFields.includes('uuid')) {
    record.uuid = faker.string.uuid()
  }

  if (selectedFields.includes('fecha_alta')) {
    record.fecha_alta = formatDate(
      faker.date.between({ from: getDateYearsAgo(5), to: new Date() }),
    )
  }

  return record
}

function generateStudent(selectedFields) {
  const record = generatePersonFields(selectedFields)

  if (selectedFields.includes('telefono')) {
    record.telefono = faker.phone.number()
  }

  if (selectedFields.includes('edad')) {
    record.edad = faker.number.int({ min: 16, max: 40 })
  }

  if (selectedFields.includes('ciudad')) {
    record.ciudad = faker.location.city()
  }

  if (selectedFields.includes('uuid')) {
    record.uuid = faker.string.uuid()
  }

  if (selectedFields.includes('curso')) {
    record.curso = faker.helpers.arrayElement(courses)
  }

  if (selectedFields.includes('fecha_matriculacion')) {
    record.fecha_matriculacion = formatDate(
      faker.date.between({ from: getDateYearsAgo(3), to: new Date() }),
    )
  }

  return record
}

function generateProduct(selectedFields, index) {
  const record = {}

  if (selectedFields.includes('id')) {
    record.id = index + 1
  }

  if (selectedFields.includes('nombre')) {
    record.nombre = faker.commerce.productName()
  }

  if (selectedFields.includes('categoria')) {
    record.categoria = faker.commerce.department()
  }

  if (selectedFields.includes('precio')) {
    record.precio = faker.number.int({ min: 100, max: 100000 }) / 100
  }

  if (selectedFields.includes('stock')) {
    record.stock = faker.number.int({ min: 0, max: 500 })
  }

  if (selectedFields.includes('activo')) {
    record.activo = faker.datatype.boolean()
  }

  return record
}

const recordGenerators = {
  usuarios: generateUser,
  alumnos: generateStudent,
  productos: generateProduct,
}

export function generateData({
  templateId,
  selectedFields,
  numberRecords,
}) {
  const generateRecord = recordGenerators[templateId]

  return Array.from({ length: numberRecords }, (_, index) =>
    generateRecord(selectedFields, index),
  )
}
