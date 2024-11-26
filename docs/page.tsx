import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Welcome() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="text-center space-y-6 mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          ¡Bienvenido a HiperFoco!
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Tu compañero perfecto para mantener el enfoque y aumentar la productividad
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8"> {/* Removed mb-16 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Características Principales
          </h2>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li>✨ Temporizador Pomodoro personalizable</li>
            <li>📝 Lista de tareas intuitiva</li>
            <li>📊 Seguimiento de progreso</li>
            <li>🎵 Música Lofi integrada</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Recomendaciones
          </h2>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li>🎯 Establece objetivos claros y alcanzables</li>
            <li>⏰ Toma descansos regulares</li>
            <li>📱 Minimiza las distracciones</li>
            <li>🌱 Mantén un ambiente de trabajo tranquilo</li>
          </ul>
        </div>
      </div>

    </div>
  )
}

