# CV Generator

A modern, responsive web application for creating professional, ATS-friendly CVs with a clean black and white design. 

**Live Demo:** [CV Generator]() 

## 🛠️ Built With

- [React](https://reactjs.org/) - Frontend framework
- [Vite](https://vitejs.dev/) - Build tool
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## 🚀 Features

- Interactive form-based CV builder
- Professional black and white design (print-friendly)
- Mobile responsive layout
- Sections for:
  - Personal information
  - Professional profile/summary
  - Work experience with responsibilities
  - Education with details
  - Projects with details
  - Skills categorization
- Real-time preview
- One-click PDF download
- Demo data for visualization

## 📋 Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone or fork the repository
   ```bash
   # Clone the repository
   git clone https://github.com/abdu61/cv-generator.git
   # OR fork it via GitHub and then clone your forked repository
   
   # Navigate to project directory
   cd cv-generator
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 📱 Responsive Design

- Desktop: Full sidebar with expanded CV preview
- Tablet: Collapsible sidebar with optimized CV display
- Mobile: Hidden sidebar with toggle button and floating download button

## 🖨️ Printing

The CV is optimized for printing to PDF:
1. Fill in your information
2. Click the "Download CV" button
3. When the print dialog appears, select "Save as PDF"
4. Save your professional CV

## 🧩 Project Structure
cv-generator/
├── public/           # Static assets
├── src/
│   ├── components/   # React components
│   │   ├── Sidebar.jsx       # Form inputs for CV data
│   │   └── CVPreview.jsx     # CV display component
│   ├── App.jsx       # Main application component
│   ├── App.css       # Application styles
│   ├── index.css     # Global styles
│   └── main.jsx      # Application entry point
└── index.html        # HTML template

## 🖋️ Usage Tips

- Complete all sections for a comprehensive CV
- Keep your summary concise and targeted to the position
- List responsibilities and achievements with action verbs
- Group similar skills under appropriate categories
- Use consistent formatting for dates and locations

## 📄 License

This project is licensed under the MIT License.