# Método Mulher no Digital Landing Page

## Overview

This is a Flask-based landing page for the "Método Mulher no Digital (MMD)" course - a digital marketing training program targeted at women who want to build online businesses and work from home. The application serves a single-page marketing site designed to replace a sales video and convert visitors into course purchasers.

The landing page follows modern web design principles with a responsive layout, feminine color palette, and conversion-focused structure including course modules, testimonials, and pricing sections.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Template Engine**: Jinja2 templates with Flask's built-in templating system
- **CSS Framework**: Bootstrap 5.3.0 for responsive grid system and components
- **Styling Approach**: Custom CSS with CSS variables for consistent theming, using a feminine color palette (pinks, purples, cream, dark gray)
- **Typography**: Google Fonts integration with Poppins font family
- **Icons**: Font Awesome 6.4.0 for iconography
- **JavaScript**: Vanilla JavaScript for smooth scrolling, scroll animations, and interactive elements

### Backend Architecture
- **Framework**: Flask (minimal Python web framework)
- **Application Structure**: Simple single-file Flask app with separate main.py entry point
- **Configuration**: Environment-based configuration for session secrets
- **Routing**: Single route serving the main landing page
- **Session Management**: Flask sessions with configurable secret key

### Design Patterns
- **MVC Pattern**: Separation of concerns with templates, static assets, and application logic
- **Responsive Design**: Mobile-first approach using Bootstrap's grid system
- **Progressive Enhancement**: Base functionality works without JavaScript, enhanced with JS interactions
- **Component-Based CSS**: Modular CSS organization with CSS custom properties for theming

### File Structure
- `app.py`: Main Flask application
- `main.py`: Application entry point
- `templates/index.html`: Main landing page template
- `static/css/style.css`: Custom styling with CSS variables
- `static/js/script.js`: Client-side interactivity

## External Dependencies

### CDN Dependencies
- **Bootstrap 5.3.0**: UI framework for responsive design and components
- **Font Awesome 6.4.0**: Icon library for visual elements
- **Google Fonts (Poppins)**: Typography system for consistent font rendering

### Python Dependencies
- **Flask**: Web framework for serving the application
- **Standard Library**: os module for environment variable handling

### Hosting Requirements
- Python 3.x runtime environment
- Web server capable of running Flask applications
- Static file serving for CSS, JavaScript, and potential image assets

### Environment Configuration
- `SESSION_SECRET`: Environment variable for Flask session security (falls back to development key)
- Host configuration: 0.0.0.0 for external access
- Port configuration: 5000 (standard Flask development port)