import { useState } from 'react'
import './App.css'
import FieldSelector from './components/FieldSelector'
import GeneratorPanel from './components/GeneratorPanel'
import Header from './components/Header'
import QuantitySelector from './components/QuantitySelector'
import TemplateSelector from './components/TemplateSelector'
import { templates } from './data/templates'

function App() {
  const initialTemplate = templates[0]
  const [selectedTemplate, setSelectedTemplate] = useState(initialTemplate.id)
  const [selectedFields, setSelectedFields] = useState(
    initialTemplate.fields.map((field) => field.id),
  )
  const [numberRecords, setNumberRecords] = useState(10)

  const currentTemplate = templates.find(
    (template) => template.id === selectedTemplate,
  )

  const handleTemplateChange = (templateId) => {
    const newTemplate = templates.find((template) => template.id === templateId)

    setSelectedTemplate(templateId)
    setSelectedFields(newTemplate.fields.map((field) => field.id))
  }

  const handleFieldChange = (fieldId) => {
    setSelectedFields((currentFields) =>
      currentFields.includes(fieldId)
        ? currentFields.filter((id) => id !== fieldId)
        : [...currentFields, fieldId],
    )
  }

  return (
    <main className="app">
      <div className="app-container">
        <Header />
        <GeneratorPanel>
          <div className="selector-row">
            <TemplateSelector
              templates={templates}
              selectedTemplate={selectedTemplate}
              onTemplateChange={handleTemplateChange}
            />
            <QuantitySelector
              numberRecords={numberRecords}
              onNumberRecordsChange={setNumberRecords}
            />
          </div>
          <FieldSelector
            fields={currentTemplate.fields}
            selectedFields={selectedFields}
            onFieldChange={handleFieldChange}
          />
        </GeneratorPanel>
      </div>
    </main>
  )
}

export default App
