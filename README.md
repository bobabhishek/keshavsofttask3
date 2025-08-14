# DataDash - Custom Mazer Dashboard

## 📋 Task Overview
This project demonstrates **front-end customization and integration ability** by adapting the open-source [Mazer Bootstrap 5 template](https://github.com/zuramai/mazer) into a data-driven dashboard. This is a practical assessment of real-world development scenarios where developers work with existing codebases.

## 🎯 Task Requirements Met

### ✅ UI/UX Customization
- **Custom Color Scheme**: Orange (`#ff5722`) and Blue Gray (`#607d8b`) branding
- **Custom Logo**: "DataDash" with data visualization theme
- **Enhanced Layout**: Improved card designs with hover effects and animations
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices

### ✅ Data Integration
- **JSON Data Source**: Uses `data.json` for all dashboard data
- **Dynamic Loading**: Real-time data fetching with error handling
- **Interactive Components**: Charts, tables, and stats cards update dynamically
- **Fallback System**: Graceful degradation when data is unavailable

### ✅ Bootstrap 5 & Modern JavaScript
- **Bootstrap 5 Components**: Cards, tables, badges, buttons, and responsive grid
- **ES6+ Features**: Arrow functions, template literals, async/await patterns
- **Chart.js Integration**: Interactive data visualizations
- **Modern CSS**: CSS custom properties, flexbox, and grid layouts

## 🚀 Features Implemented

### 1. **Data-Driven Dashboard**
- Real-time statistics cards (Users, Orders, Revenue, Products)
- Dynamic product table with CRUD operations
- Interactive bar chart showing product pricing
- Quick stats sidebar with live updates

### 2. **Custom Styling & Branding**
- Custom color palette with CSS variables
- Hover animations and transitions
- Professional gradient sidebar
- Consistent typography and spacing

### 3. **Responsive & Accessible**
- Mobile-first responsive design
- Bootstrap 5 grid system
- Semantic HTML structure
- Keyboard navigation support

### 4. **Error Handling & UX**
- Loading states for all components
- Error handling for data fetching
- Fallback data when API fails
- User-friendly status indicators

## 🛠️ Technical Implementation

### Project Structure
```
keshavsofttask3/
├── mazer/                          # Forked Mazer template
│   ├── src/
│   │   ├── index.html             # Customized dashboard
│   │   ├── data.json              # Data source
│   │   ├── layouts/               # Template layouts
│   │   └── assets/                # Styles and scripts
│   ├── package.json               # Dependencies
│   └── README.md                  # Project documentation
├── data-page.html                 # Alternative implementation
└── README.md                      # This file
```

### Key Customizations

#### 1. **Data Integration** (`index.html`)
```javascript
// Fetch data from JSON file
fetch('/data.json')
    .then(response => response.json())
    .then(data => {
        updateDashboard(data);
        updateChart(data.products);
        updateProductsTable(data.products);
    })
    .catch(error => {
        // Fallback to hardcoded data
        console.error('Error loading data:', error);
    });
```

#### 2. **Custom Styling** (CSS Variables)
```css
:root {
    --bs-primary: #ff5722;        /* Orange */
    --bs-secondary: #607d8b;      /* Blue Gray */
    --bs-primary-rgb: 255, 87, 34;
    --bs-secondary-rgb: 96, 125, 139;
}
```

#### 3. **Interactive Components**
- **Chart.js Integration**: Dynamic bar charts
- **CRUD Operations**: Edit/Delete product functionality
- **Real-time Updates**: Live data refresh capabilities

## 📊 Data Structure

### `data.json` Schema
```json
{
  "users": 1247,
  "orders": 389,
  "revenue": 15680,
  "products": [
    {
      "id": 1,
      "name": "Laptop",
      "price": 800,
      "category": "Electronics",
      "stock": 15,
      "status": "active"
    }
  ],
  "analytics": {
    "monthly_sales": [...],
    "top_categories": [...]
  },
  "system": {
    "version": "1.0.0",
    "status": "operational"
  }
}
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- Modern web browser
- Local development server

### Quick Start
1. **Clone/Fork the Repository**
   ```bash
   git clone https://github.com/your-username/keshavsofttask3.git
   cd keshavsofttask3
   ```

2. **Install Dependencies** (if using build tools)
   ```bash
   cd mazer
   npm install
   # or
   yarn install
   ```

3. **Start Development Server**
   ```bash
   # Using Node.js
   npx serve mazer/src
   
   # Using Python
   python -m http.server 5500
   
   # Using PHP
   php -S localhost:5500
   ```

4. **Open in Browser**
   ```
   http://localhost:5500/index.html
   ```

## 🎨 Customization Guide

### Adding New Data Fields
1. Update `data.json` with new fields
2. Modify JavaScript functions in `index.html`
3. Update corresponding HTML elements

### Changing Colors
1. Edit CSS variables in the `<style>` section
2. Update Bootstrap theme colors
3. Modify gradient backgrounds

### Adding New Components
1. Follow Mazer's template structure
2. Use Bootstrap 5 components
3. Integrate with existing data flow

## 📱 Responsive Design

### Breakpoints
- **Desktop**: Full sidebar, all features visible
- **Tablet**: Collapsible sidebar, optimized layout
- **Mobile**: Hamburger menu, stacked cards

### Features
- Mobile-first approach
- Touch-friendly interface
- Optimized for all screen sizes

## 🔧 Development Skills Demonstrated

### Front-End Technologies
- ✅ **Bootstrap 5**: Grid system, components, utilities
- ✅ **JavaScript ES6+**: Modern syntax, async/await, modules
- ✅ **CSS3**: Custom properties, flexbox, animations
- ✅ **HTML5**: Semantic markup, accessibility

### Integration & Data Handling
- ✅ **JSON API**: Data fetching and parsing
- ✅ **Error Handling**: Graceful degradation
- ✅ **Chart.js**: Data visualization
- ✅ **Responsive Design**: Mobile-first approach

### Code Quality
- ✅ **Clean Code**: Well-structured, readable
- ✅ **Comments**: Clear documentation
- ✅ **Error Handling**: Robust error management
- ✅ **Performance**: Optimized loading and rendering

## 🎯 Evaluation Criteria Met

### ✅ Understanding Existing Code
- Successfully adapted Mazer template structure
- Maintained template's layout system
- Extended functionality without breaking existing features

### ✅ Data Binding & Integration
- Dynamic data loading from JSON
- Real-time component updates
- Proper error handling and fallbacks

### ✅ Bootstrap 5 Mastery
- Responsive grid system implementation
- Component customization and styling
- Utility classes and custom CSS

### ✅ Modern JavaScript
- ES6+ features and syntax
- Async/await patterns
- Event handling and DOM manipulation

## 📄 License
This project is based on the [Mazer template](https://github.com/zuramai/mazer) which is licensed under the MIT License.

## 🙏 Acknowledgments
- [Mazer Template](https://github.com/zuramai/mazer) - Base template
- [Bootstrap 5](https://getbootstrap.com/) - UI framework
- [Chart.js](https://www.chartjs.org/) - Chart library
- [Bootstrap Icons](https://icons.getbootstrap.com/) - Icon library

---

**DataDash** - A practical demonstration of front-end customization and data integration skills! 🚀

*This project showcases real-world development scenarios where developers adapt existing codebases to meet specific requirements while maintaining code quality and user experience.*
