import { useState } from 'react'
import './App.css'
import FieldSelector from './components/FieldSelector'
import GenerateButton from './components/GenerateButton'
import GenerationResult from './components/GenerationResult'
import GeneratorPanel from './components/GeneratorPanel'
import Header from './components/Header'
import QuantitySelector from './components/QuantitySelector'
import TemplateSelector from './components/TemplateSelector'
import ValidationMessage from './components/ValidationMessage'
import { templates } from './data/templates'
import { generateData } from './utils/generateData'

function getConfigurationErrors(numberRecords, selectedFields) {
  let quantityError = ''

  if (numberRecords === '') {
    quantityError = 'Indica la cantidad de registros.'
  } else if (!Number.isFinite(numberRecords) || !Number.isInteger(numberRecords)) {
    quantityError = 'La cantidad debe ser un número entero.'
  } else if (numberRecords < 1) {
    quantityError = 'La cantidad debe ser de al menos 1 registro.'
  } else if (numberRecords > 100) {
    quantityError = 'La cantidad no puede superar 100 registros.'
  }

  const fieldError =
    selectedFields.length === 0 ? 'Selecciona al menos un campo.' : ''

  return {
    quantityError,
    fieldError,
    errors: [quantityError, fieldError].filter(Boolean),
  }
}

function App() {
  const initialTemplate = templates[0]
  const [selectedTemplate, setSelectedTemplate] = useState(initialTemplate.id)
  const [selectedFields, setSelectedFields] = useState(
    initialTemplate.fields.map((field) => field.id),
  )
  const [numberRecords, setNumberRecords] = useState(10)
  const [hasAttemptedGenerate, setHasAttemptedGenerate] = useState(false)
  const [generatedData, setGeneratedData] = useState([])

  const currentTemplate = templates.find(
    (template) => template.id === selectedTemplate,
  )
  const previewColumns = currentTemplate.fields.filter((field) =>
    selectedFields.includes(field.id),
  )

  const handleTemplateChange = (templateId) => {
    const newTemplate = templates.find((template) => template.id === templateId)

    setSelectedTemplate(templateId)
    setSelectedFields(newTemplate.fields.map((field) => field.id))
    setGeneratedData([])
  }

  const handleFieldChange = (fieldId) => {
    setSelectedFields((currentFields) =>
      currentFields.includes(fieldId)
        ? currentFields.filter((id) => id !== fieldId)
        : [...currentFields, fieldId],
    )
    setGeneratedData([])
  }

  const handleNumberRecordsChange = (value) => {
    setNumberRecords(value)
    setGeneratedData([])
  }

  const { quantityError, fieldError, errors } = getConfigurationErrors(
    numberRecords,
    selectedFields,
  )
  const isConfigurationValid = errors.length === 0
  const visibleErrors = hasAttemptedGenerate ? errors : []

  const handleGenerate = (event) => {
    event.preventDefault()
    setHasAttemptedGenerate(true)

    if (!isConfigurationValid) {
      return
    }

    setGeneratedData(
      generateData({
        templateId: selectedTemplate,
        selectedFields,
        numberRecords,
      }),
    )
  }

  return (
    <main className="app">
      <div className="app-container">
        <Header />
        <GeneratorPanel onSubmit={handleGenerate}>
          <div className="selector-row">
            <TemplateSelector
              templates={templates}
              selectedTemplate={selectedTemplate}
              onTemplateChange={handleTemplateChange}
            />
            <QuantitySelector
              numberRecords={numberRecords}
              onNumberRecordsChange={handleNumberRecordsChange}
              hasError={hasAttemptedGenerate && Boolean(quantityError)}
            />
          </div>
          <FieldSelector
            fields={currentTemplate.fields}
            selectedFields={selectedFields}
            onFieldChange={handleFieldChange}
            hasError={hasAttemptedGenerate && Boolean(fieldError)}
          />
          <ValidationMessage errors={visibleErrors} />
          <GenerateButton />
        </GeneratorPanel>
        <GenerationResult
          generatedData={generatedData}
          columns={previewColumns}
          templateId={selectedTemplate}
        />
      </div>
    </main>
  )
}

export default App
