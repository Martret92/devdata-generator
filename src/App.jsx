import { useEffect, useState } from 'react'
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

const THEME_STORAGE_KEY = 'devdata-theme'

function getInitialTheme() {
  try {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY)

    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme
    }
  } catch {
    // Continúa con la preferencia del sistema.
  }

  try {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  } catch {
    return 'light'
  }
}

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
  const [theme, setTheme] = useState(getInitialTheme)
  const [selectedTemplate, setSelectedTemplate] = useState(initialTemplate.id)
  const [selectedFields, setSelectedFields] = useState(
    initialTemplate.fields.map((field) => field.id),
  )
  const [numberRecords, setNumberRecords] = useState(10)
  const [hasAttemptedGenerate, setHasAttemptedGenerate] = useState(false)
  const [generatedData, setGeneratedData] = useState([])
  const [generationVersion, setGenerationVersion] = useState(0)

  useEffect(() => {
    document.documentElement.dataset.theme = theme

    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      // El tema sigue funcionando durante la sesión.
    }
  }, [theme])

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

  const handleToggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === 'dark' ? 'light' : 'dark',
    )
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

    const newGeneratedData = generateData({
      templateId: selectedTemplate,
      selectedFields,
      numberRecords,
    })

    setGeneratedData(newGeneratedData)
    setGenerationVersion((currentVersion) => currentVersion + 1)
  }

  return (
    <main className="app">
      <div className="app-container">
        <Header theme={theme} onToggleTheme={handleToggleTheme} />
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
          key={generationVersion}
          generatedData={generatedData}
          columns={previewColumns}
          templateId={selectedTemplate}
        />
      </div>
    </main>
  )
}

export default App
