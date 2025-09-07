# TODO App

A modern, responsive TODO application built with React, TypeScript, and Vite. This project demonstrates clean architecture patterns, context-based state management, and modern React development practices.

## 🎯 Project Goals

- **Learn React with TypeScript**: Implement type-safe React components and hooks
- **Practice State Management**: Use React Context API for global state management
- **Modern Development**: Utilize Vite for fast development and build processes
- **Clean Architecture**: Demonstrate proper component structure and separation of concerns
- **Responsive Design**: Create a user-friendly interface that works across devices

## ✨ Features

- ✅ Add new TODO items
- ✅ Mark TODOs as completed/incomplete
- ✅ Delete individual TODO items
- ✅ Delete all TODO items at once
- ✅ Clear only completed TODO items
- ✅ Real-time completion counter
- ✅ Responsive design with hover effects
- ✅ TypeScript for type safety
- ✅ Mock data for initial development

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Actions.tsx     # Action buttons (delete all, clear completed)
│   ├── Button.tsx      # Reusable button component
│   ├── Form.tsx        # TODO input form
│   ├── Provider.tsx    # Context provider for state management
│   ├── Todo.tsx        # Individual TODO item component
│   └── Todos.tsx       # TODO list container
├── context/            # Context API setup
│   └── Context.ts      # TODO context definition and types
├── data/               # Mock data and constants
│   └── mock-todo.ts    # Initial TODO items for development
├── types/              # TypeScript type definitions
│   └── Todo.interface.ts # TODO item interface
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
├── index.css           # Global styles
└── vite-env.d.ts       # Vite environment types
```

## 🛠️ Technologies Used

- **React 18** - UI library with hooks
- **TypeScript** - Type safety and better development experience
- **Vite** - Fast build tool and development server
- **React Icons** - Icon library for UI elements
- **UUID** - Unique ID generation for TODO items
- **CSS3** - Modern styling with transitions and animations

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd TODO
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)


## 🎨 Features Overview

### State Management
- Uses React Context API for global state management
- Centralized TODO operations (add, delete, toggle, clear)
- Automatic completion counting

### Component Architecture
- **Provider**: Wraps the application with context
- **Form**: Handles new TODO creation
- **Actions**: Provides bulk operations (delete all, clear completed)
- **Todos**: Renders the list of TODO items
- **Todo**: Individual TODO item with toggle and delete functionality
- **Button**: Reusable button component with consistent styling

### Styling
- Modern CSS with hover effects and transitions
- Responsive design that works on all screen sizes
- Color-coded states for completed vs pending items
- Smooth animations and visual feedback

## 🔄 State Flow

1. **Adding TODOs**: Form component captures input and adds new items via context
2. **Toggling Status**: Individual TODO items can be marked as complete/incomplete
3. **Deleting Items**: Items can be deleted individually or in bulk
4. **State Updates**: All operations update the global state through context providers

## 🎯 Development Patterns

- **TypeScript Interfaces**: Strict typing for TODO items and component props
- **Component Composition**: Reusable components with clear responsibilities
- **Context Pattern**: Global state management without prop drilling
- **Event Handling**: Proper form submission and click event management
- **CSS Organization**: Modular styling with consistent naming conventions

## 📅 UPDATE - 07.09.2025

### 🎉 New Features Added

#### React Toastify Integration
- **Toast Notifications**: Added user-friendly notifications for all major actions
- **Contextual Messages**: Different toast types for different actions:
  - ✅ Success toasts when completing TODOs
  - ⚠️ Warning toasts when deleting all TODOs
  - ℹ️ Info toasts when clearing completed TODOs
- **Enhanced UX**: Immediate visual feedback for user actions
- **Customizable**: Positioned notifications with auto-close functionality

#### IdleTimer Component
- **Activity Tracking**: Monitors user activity and interaction patterns
- **Performance Insights**: Tracks user engagement with the application
- **Event Detection**: Captures and counts various user interaction events
- **Time Tracking**: Shows elapsed time since last user activity
- **Real-time Updates**: Updates activity metrics every 500ms for accurate tracking

### 🏗️ Updated Project Structure

```
src/
├── components/
│   ├── Actions.tsx     # Enhanced with toast notifications
│   ├── Button.tsx      
│   ├── Form.tsx        
│   ├── IdleTimer.tsx   # 🆕 NEW: User activity monitoring
│   ├── Provider.tsx    
│   ├── Todo.tsx        # Enhanced with toast notifications
│   └── Todos.tsx       
├── App.tsx             # Updated with ToastContainer and IdleTimer
└── ...existing files...
```

### 📦 New Dependencies
- **react-toastify**: Modern toast notification library
- **react-idle-timer**: User activity and idle time tracking

### 🚀 Benefits of New Features

#### Toast Notifications Benefits:
- **Better User Experience**: Users get immediate feedback for their actions
- **Visual Confirmation**: Clear indication when actions are completed successfully
- **Error Prevention**: Helps users understand what happened with their interactions
- **Professional Feel**: Makes the app feel more polished and responsive

#### IdleTimer Benefits:
- **User Analytics**: Understand how users interact with the application
- **Performance Monitoring**: Track user engagement and session duration
- **Development Insights**: Helps developers understand user behavior patterns
- **Future Enhancements**: Data can be used for features like auto-save or session management

---

# TODO Додаток

Сучасний, адаптивний TODO додаток, створений з використанням React, TypeScript та Vite. Цей проект демонструє шаблони чистої архітектури, управління станом на основі контексту та сучасні практики розробки React.

## 🎯 Цілі Проекту

- **Вивчення React з TypeScript**: Впровадження типобезпечних React компонентів та хуків
- **Практика Управління Станом**: Використання React Context API для глобального управління станом
- **Сучасна Розробка**: Використання Vite для швидкої розробки та процесів збірки
- **Чиста Архітектура**: Демонстрація правильної структури компонентів та розділення відповідальностей
- **Адаптивний Дизайн**: Створення зручного інтерфейсу, який працює на всіх пристроях

## ✨ Функціональність

- ✅ Додавання нових TODO елементів
- ✅ Позначення TODO як виконаних/невиконаних
- ✅ Видалення окремих TODO елементів
- ✅ Видалення всіх TODO елементів одразу
- ✅ Очищення лише виконаних TODO елементів
- ✅ Лічильник виконаних завдань в реальному часі
- ✅ Адаптивний дизайн з ефектами наведення
- ✅ TypeScript для типобезпеки
- ✅ Тестові дані для початкової розробки

## 🏗️ Структура Проекту

```
src/
├── components/          # React компоненти
│   ├── Actions.tsx     # Кнопки дій (видалити все, очистити виконані)
│   ├── Button.tsx      # Багаторазовий компонент кнопки
│   ├── Form.tsx        # Форма введення TODO
│   ├── Provider.tsx    # Провайдер контексту для управління станом
│   ├── Todo.tsx        # Компонент окремого TODO елемента
│   └── Todos.tsx       # Контейнер списку TODO
├── context/            # Налаштування Context API
│   └── Context.ts      # Визначення контексту TODO та типи
├── data/               # Тестові дані та константи
│   └── mock-todo.ts    # Початкові TODO елементи для розробки
├── types/              # Визначення типів TypeScript
│   └── Todo.interface.ts # Інтерфейс TODO елемента
├── App.tsx             # Головний компонент додатку
├── main.tsx            # Точка входу додатку
├── index.css           # Глобальні стилі
└── vite-env.d.ts       # Типи середовища Vite
```

## 🛠️ Використані Технології

- **React 18** - UI бібліотека з хуками
- **TypeScript** - Типобезпека та кращий досвід розробки
- **Vite** - Швидкий інструмент збірки та сервер розробки
- **React Icons** - Бібліотека іконок для UI елементів
- **UUID** - Генерація унікальних ID для TODO елементів
- **CSS3** - Сучасні стилі з переходами та анімаціями

## 🚀 Початок Роботи

### Встановлення

1. **Клонування репозиторію**
   ```bash
   git clone <repository-url>
   cd TODO
   ```

2. **Встановлення залежностей**
   ```bash
   npm install
   # або
   yarn install
   ```

3. **Запуск сервера розробки**
   ```bash
   npm run dev
   # або
   yarn dev
   ```

4. **Відкрийте браузер**
   Перейдіть до `http://localhost:5173` (або порт, показаний у вашому терміналі)

## 🎨 Огляд Функціональності

### Управління Станом
- Використовує React Context API для глобального управління станом
- Централізовані операції TODO (додавання, видалення, перемикання, очищення)
- Автоматичний підрахунок виконаних завдань

### Архітектура Компонентів
- **Provider**: Обгортає додаток контекстом
- **Form**: Обробляє створення нових TODO
- **Actions**: Надає масові операції (видалити все, очистити виконані)
- **Todos**: Відображає список TODO елементів
- **Todo**: Окремий TODO елемент з функціями перемикання та видалення
- **Button**: Багаторазовий компонент кнопки з послідовним стилем

### Стилізація
- Сучасний CSS з ефектами наведення та переходами
- Адаптивний дизайн, який працює на всіх розмірах екрану
- Кольорове кодування станів для виконаних та очікуючих елементів
- Плавні анімації та візуальний зворотний зв'язок

## 🔄 Потік Стану

1. **Додавання TODO**: Компонент форми захоплює введення та додає нові елементи через контекст
2. **Перемикання Статусу**: Окремі TODO елементи можуть бути позначені як виконані/невиконані
3. **Видалення Елементів**: Елементи можуть бути видалені індивідуально або масово
4. **Оновлення Стану**: Всі операції оновлюють глобальний стан через провайдери контексту

## 🎯 Шаблони Розробки

- **TypeScript Інтерфейси**: Строга типізація для TODO елементів та пропсів компонентів
- **Композиція Компонентів**: Багаторазові компоненти з чіткими відповідальностями
- **Шаблон Контексту**: Глобальне управління станом без передачі пропсів через багато рівнів
- **Обробка Подій**: Правильна обробка відправки форм та подій кліку
- **Організація CSS**: Модульна стилізація з послідовним іменуванням

## 📅 ОНОВЛЕННЯ - 07.09.2025

### 🎉 Додані Нові Функції

#### Інтеграція React Toastify
- **Toast Сповіщення**: Додано зручні сповіщення для всіх основних дій
- **Контекстні Повідомлення**: Різні типи toast для різних дій:
  - ✅ Успішні toast при завершенні TODO
  - ⚠️ Попереджувальні toast при видаленні всіх TODO
  - ℹ️ Інформаційні toast при очищенні виконаних TODO
- **Покращений UX**: Миттєвий візуальний зворотний зв'язок для дій користувача
- **Налаштовувані**: Позиціоновані сповіщення з функцією автоматичного закриття

#### Компонент IdleTimer
- **Відстеження Активності**: Моніторить активність користувача та шаблони взаємодії
- **Аналітика Продуктивності**: Відстежує залученість користувача в додаток
- **Виявлення Подій**: Захоплює та підраховує різні події взаємодії користувача
- **Відстеження Часу**: Показує час, що минув з останньої активності користувача
- **Оновлення в Реальному Часі**: Оновлює метрики активності кожні 500мс для точного відстеження

### 🏗️ Оновлена Структура Проекту

```
src/
├── components/
│   ├── Actions.tsx     # Покращено toast сповіщеннями
│   ├── Button.tsx      
│   ├── Form.tsx        
│   ├── IdleTimer.tsx   # 🆕 НОВИЙ: Моніторинг активності користувача
│   ├── Provider.tsx    
│   ├── Todo.tsx        # Покращено toast сповіщеннями
│   └── Todos.tsx       
├── App.tsx             # Оновлено з ToastContainer та IdleTimer
└── ...існуючі файли...
```

### 📦 Нові Залежності
- **react-toastify**: Сучасна бібліотека toast сповіщень
- **react-idle-timer**: Відстеження активності користувача та часу простою

### 🚀 Переваги Нових Функцій

#### Переваги Toast Сповіщень:
- **Кращий Досвід Користувача**: Користувачі отримують миттєвий зворотний зв'язок на свої дії
- **Візуальне Підтвердження**: Чітке позначення успішного виконання дій
- **Запобігання Помилкам**: Допомагає користувачам зрозуміти, що сталося з їх взаємодіями
- **Професійний Вигляд**: Робить додаток більш відшліфованим та реактивним

#### Переваги IdleTimer:
- **Аналітика Користувачів**: Розуміння того, як користувачі взаємодіють з додатком
- **Моніторинг Продуктивності**: Відстеження залученості користувачів та тривалості сесій
- **Інсайти Розробки**: Допомагає розробникам зрозуміти шаблони поведінки користувачів
- **Майбутні Покращення**: Дані можуть бути використані для функцій як автозбереження або управління сесіями
