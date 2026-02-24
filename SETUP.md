# 🛠️ Configuración del Ambiente de Desarrollo

## 📋 Prerequisitos

Antes de comenzar el curso, asegúrate de tener instalado:

1. **Node.js** (v20 o superior) - Usaremos NVM para gestionar versiones
2. **Git** - Para clonar el repositorio
3. **Editor de código** - Recomendamos VS Code

---

## 🔧 Instalación de Git

Git es necesario para clonar el repositorio y gestionar el código.

### 🍎 macOS

#### Opción 1: Usando Homebrew (Recomendado)
```bash
# Instalar Homebrew si no lo tienes
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Instalar Git
brew install git
```

#### Opción 2: Usando Xcode Command Line Tools
```bash
xcode-select --install
```

Verificar instalación:
```bash
git --version
```

---

### 🐧 Linux

#### Ubuntu/Debian
```bash
sudo apt update
sudo apt install git
```

#### Fedora
```bash
sudo dnf install git
```

#### Arch Linux
```bash
sudo pacman -S git
```

Verificar instalación:
```bash
git --version
```

---

### 🪟 Windows

#### Opción 1: Instalador oficial (Recomendado)
1. Descarga Git desde: https://git-scm.com/download/win
2. Ejecuta el instalador
3. Usa las opciones por defecto (recomendado)
4. Asegúrate de seleccionar "Git Bash" durante la instalación

#### Opción 2: Usando Chocolatey
```powershell
choco install git
```

#### Opción 3: Usando Winget
```powershell
winget install --id Git.Git -e --source winget
```

Verificar instalación (abre una nueva terminal):
```powershell
git --version
```

### Configuración inicial de Git (Todos los sistemas)

Después de instalar Git, configura tu nombre y email:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

# Verificar configuración
git config --list
```

---

## 🔧 Instalación de NVM (Node Version Manager)

NVM te permite instalar y cambiar entre diferentes versiones de Node.js fácilmente.

### 🍎 macOS / 🐧 Linux

#### Opción 1: Instalación con curl
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
```

#### Opción 2: Instalación con wget
```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
```

#### Configurar el shell
Agrega estas líneas a tu archivo de configuración (`~/.bashrc`, `~/.zshrc`, o `~/.profile`):

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

Recarga tu configuración:
```bash
source ~/.bashrc  # o ~/.zshrc si usas zsh
```

Verifica la instalación:
```bash
nvm --version
```

---

### 🪟 Windows

#### Opción 1: nvm-windows (Recomendado)

1. Descarga el instalador desde: https://github.com/coreybutler/nvm-windows/releases
2. Descarga `nvm-setup.exe` de la última versión
3. Ejecuta el instalador y sigue las instrucciones
4. Abre una nueva terminal (PowerShell o CMD como Administrador)

Verifica la instalación:
```powershell
nvm version
```

#### Opción 2: Usando Chocolatey
```powershell
choco install nvm
```

---

## 📦 Instalar Node.js con NVM

### En todos los sistemas operativos:

```bash
# Ver versiones disponibles
nvm list available  # Windows
nvm ls-remote       # macOS/Linux

# Instalar Node.js v20 (LTS)
nvm install 20

# Usar Node.js v20
nvm use 20

# Establecer v20 como versión por defecto
nvm alias default 20  # macOS/Linux
nvm use 20            # Windows (ejecutar en cada sesión)

# Verificar instalación
node --version
npm --version
```

Deberías ver algo como:
```
v20.x.x
10.x.x
```

---

## 🚀 Configurar el Proyecto

### 1. Clonar el repositorio

**Para estudiantes:**
```bash
git clone <url-del-repositorio>
cd design-patterns
git checkout students
```

**Para instructores:**
```bash
git clone <url-del-repositorio>
cd design-patterns
git checkout master
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Verificar que todo funciona

```bash
# Ejecutar un ejemplo
npm run example:singleton

# Deberías ver la salida del ejemplo en la consola
```

---

## 💻 Editor de Código Recomendado: VS Code

### Instalar VS Code

- **macOS**: https://code.visualstudio.com/download
- **Linux**: https://code.visualstudio.com/download
- **Windows**: https://code.visualstudio.com/download

### Extensiones Recomendadas

Instala estas extensiones para una mejor experiencia:

1. **ESLint** - Linting de código
2. **Prettier** - Formateo de código
3. **TypeScript Vue Plugin (Volar)** - Soporte TypeScript
4. **Error Lens** - Muestra errores inline
5. **GitLens** - Mejora la integración con Git

Instalar desde VS Code:
```
Ctrl+Shift+X (Windows/Linux) o Cmd+Shift+X (macOS)
Buscar cada extensión e instalar
```

---

## 🔍 Verificación Final

Ejecuta estos comandos para verificar que todo está configurado correctamente:

```bash
# Verificar Node.js
node --version
# Debe mostrar: v20.x.x o superior

# Verificar npm
npm --version
# Debe mostrar: 10.x.x o superior

# Verificar Git
git --version
# Debe mostrar: git version 2.x.x

# Verificar que el proyecto compila
npm run build
# No debe mostrar errores

# Ejecutar todos los ejemplos (opcional)
npm run example:singleton
npm run example:factory
npm run example:builder
```

---

## 🐛 Solución de Problemas Comunes

### Problema: "nvm: command not found"

**Solución (macOS/Linux):**
```bash
# Asegúrate de que NVM está en tu PATH
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
source ~/.bashrc  # o ~/.zshrc
```

**Solución (Windows):**
- Ejecuta PowerShell o CMD como Administrador
- Reinicia la terminal después de instalar

---

### Problema: "npm install" falla

**Solución:**
```bash
# Limpiar caché de npm
npm cache clean --force

# Eliminar node_modules y reinstalar
rm -rf node_modules  # macOS/Linux
rmdir /s node_modules  # Windows

npm install
```

---

### Problema: Permisos en macOS/Linux

**Solución:**
```bash
# No uses sudo con npm
# En su lugar, configura npm para usar un directorio sin permisos especiales
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'

# Agrega a tu PATH en ~/.bashrc o ~/.zshrc
export PATH=~/.npm-global/bin:$PATH

source ~/.bashrc
```

---

### Problema: TypeScript no compila

**Solución:**
```bash
# Reinstalar TypeScript globalmente
npm install -g typescript

# Verificar versión
tsc --version

# Limpiar y recompilar
npm run build
```

---

## 📚 Recursos Adicionales

- [Documentación de NVM](https://github.com/nvm-sh/nvm)
- [Documentación de Node.js](https://nodejs.org/docs/)
- [Documentación de TypeScript](https://www.typescriptlang.org/docs/)
- [Guía de VS Code](https://code.visualstudio.com/docs)

---

## ✅ Checklist de Configuración

Antes del curso, verifica que tienes:

- [ ] NVM instalado y funcionando
- [ ] Node.js v20+ instalado
- [ ] Git instalado
- [ ] Repositorio clonado
- [ ] Dependencias instaladas (`npm install`)
- [ ] Al menos un ejemplo ejecutándose correctamente
- [ ] VS Code instalado (opcional pero recomendado)
- [ ] Extensiones de VS Code instaladas (opcional)

---

## 🆘 ¿Necesitas Ayuda?

Si tienes problemas con la configuración:

1. Revisa la sección de "Solución de Problemas Comunes"
2. Busca el error en Google/Stack Overflow
3. Pregunta al instructor antes del curso
4. Llega 15 minutos antes del curso para resolver problemas técnicos

---

**¡Listo! Ahora estás preparado para comenzar el curso de Patrones de Diseño en TypeScript 🚀**
