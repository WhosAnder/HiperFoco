# HiperFoco

**HiperFoco** es una aplicación web diseñada para mejorar la productividad personal mediante herramientas basadas en la técnica Pomodoro, registro de tareas y seguimiento de progreso.

## Características principales

1. **Pomodoro**: 
   - Configuración de ciclos de trabajo con descansos largos y cortos.
2. **Registro de tareas**:
   - Agrega, edita y elimina tareas o temas a estudiar.
3. **Seguimiento de progreso**:
   - Visualiza el avance de las tareas completadas.

## Tecnologías utilizadas

- **React**: Biblioteca principal para la creación de interfaces de usuario.
- **Next.js**: Framework para React, utilizado para manejar el enrutamiento y la generación de páginas.
- **Tailwind CSS**: Framework para el diseño y la estilización de componentes.
- **ShadCN UI**: Biblioteca utilizada para componentes de interfaz de usuario estilizados.

## Estructura del proyecto

```
├── .git               # Sistema de control de versiones.
├── .next              # Archivos generados por Next.js.
├── node_modules       # Dependencias del proyecto.
├── public             # Recursos estáticos como imágenes.
├── src                # Código fuente de la aplicación.
├── progress           # Funcionalidad relacionada con el seguimiento del progreso.
├── todo               # Módulo para gestión de tareas.
├── welcome            # Módulo de bienvenida o introducción.
├── layout.tsx         # Estructura base de la aplicación.
├── next.config.ts     # Configuración personalizada de Next.js.
├── package.json       # Configuración y dependencias del proyecto.
├── postcss.config.mjs # Configuración de PostCSS.
├── tailwind.config.ts # Configuración de Tailwind CSS.
├── tsconfig.json      # Configuración de TypeScript.
```

## Instalación y configuración

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre el navegador en `http://localhost:3000` para ver la aplicación.

## Próximos pasos

- Mejorar el diseño visual del componente Pomodoro.
- Implementar almacenamiento persistente para las tareas.
- Añadir métricas de productividad para análisis detallado.

## Contribuciones

Las contribuciones son bienvenidas. Si tienes alguna idea o mejora, no dudes en abrir un issue o enviar un pull request.

---
**Autor:** Andre  
**Contacto:** [Tu correo o enlace a redes profesionales]