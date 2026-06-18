import ComponentForm from '../components/ComponentForm'
import { useNavigate } from 'react-router-dom'

const CreateComponent = () => {

  const navigate = useNavigate()

  const handleSubmit = async (values) => {
    console.log(values)
  }


  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100">
      <section className="mx-auto max-w-xl">

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl sm:p-8">
          <div className="mb-8">
            <h1 className="mt-2 text-2xl font-bold text-white">Create Component</h1>
          </div>

          <ComponentForm
            onSubmit={handleSubmit}
            submitLabel="Create Component" onCancel={() => navigate('/')}
          />
        </div>
      </section>
    </main>
  )
}

export default CreateComponent
