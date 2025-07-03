export const blogPosts = [
  {
    id: '1',
    title: 'Getting Started with React and TypeScript',
    slug: 'getting-started-react-typescript',
    date: '2024-01-15',
    tags: ['React', 'TypeScript', 'Web Development'],
    summary: 'Learn how to set up a modern React application with TypeScript, exploring best practices and essential configurations.',
    content: `# Getting Started with React and TypeScript

React and TypeScript form a powerful combination for building modern web applications. In this comprehensive guide, we'll explore how to set up, configure, and leverage the full potential of this dynamic duo.

## Why TypeScript with React?

TypeScript brings static typing to JavaScript, providing several benefits:
- **Better IDE support** with autocomplete and error detection
- **Improved code quality** through compile-time error checking
- **Enhanced developer experience** with better refactoring tools
- **Self-documenting code** through type annotations

## Setting Up Your Environment

First, let's create a new React project with TypeScript:

\`\`\`bash
npm create vite@latest my-app --template react-ts
cd my-app
npm install
npm run dev
\`\`\`

## Essential TypeScript Concepts for React

### Component Props
Define your component props with interfaces:

\`\`\`typescript
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button = ({ children, onClick, variant = 'primary' }) => {
  return (
    <button onClick={onClick} className={\`btn btn-\${variant}\`}>
      {children}
    </button>
  );
};
\`\`\`

### State Management
Use generics with useState for better type safety:

\`\`\`typescript
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(false);
\`\`\`

## Best Practices

1. **Always define prop types** - Use interfaces or types for all component props
2. **Use strict mode** - Enable strict TypeScript compiler options
3. **Leverage utility types** - Use Partial, Pick, Omit for flexible type definitions
4. **Handle null/undefined** - Always consider nullable states

## Conclusion

TypeScript with React creates a robust development environment that scales well with your application. The initial setup investment pays dividends in code quality and developer productivity.`,
    readTime: 8,
    author: {
      name: 'Alex Johnson',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    featured: true
  },
  {
    id: '2',
    title: 'Modern CSS Techniques: Grid and Flexbox',
    slug: 'modern-css-grid-flexbox',
    date: '2024-01-10',
    tags: ['CSS', 'Web Design', 'Layout'],
    summary: 'Discover advanced CSS layout techniques using Grid and Flexbox to create responsive and beautiful web designs.',
    content: `# Modern CSS Techniques: Grid and Flexbox

CSS has evolved significantly over the years, and modern layout techniques like Grid and Flexbox have revolutionized how we approach web design. Let's explore these powerful tools and learn when to use each one.

## CSS Grid: The Two-Dimensional Layout System

CSS Grid is perfect for creating complex layouts with rows and columns:

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}
\`\`\`

### Key Grid Properties
- **grid-template-columns/rows**: Define track sizes
- **grid-gap**: Space between items
- **grid-area**: Place items in specific areas
- **justify-items/align-items**: Control item alignment

## Flexbox: The One-Dimensional Layout Method

Flexbox excels at distributing space and aligning items:

\`\`\`css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
\`\`\`

### When to Use Which?

- **Use Grid for**: Complex layouts, magazine-style designs, dashboard layouts
- **Use Flexbox for**: Navigation bars, centering content, distributing space

## Practical Examples

### Card Layout with Grid
\`\`\`css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}
\`\`\`

### Responsive Navigation with Flexbox
\`\`\`css
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}
\`\`\`

## Browser Support and Fallbacks

Both Grid and Flexbox have excellent browser support. For older browsers, consider:
- Feature queries with @supports
- Progressive enhancement approach
- Fallback layouts using floats or positioning

## Conclusion

Mastering Grid and Flexbox opens up endless possibilities for creating sophisticated, responsive layouts. Practice with different combinations to find what works best for your projects.`,
    readTime: 6,
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    featured: false
  },
  {
    id: '3',
    title: 'Building Scalable Node.js Applications',
    slug: 'scalable-nodejs-applications',
    date: '2024-01-05',
    tags: ['Node.js', 'Backend', 'Architecture'],
    summary: 'Learn architectural patterns and best practices for building Node.js applications that can scale with your business.',
    content: `# Building Scalable Node.js Applications

Building applications that can handle growth is crucial for long-term success. This guide covers essential patterns and practices for creating scalable Node.js applications.

## Architecture Patterns

### MVC (Model-View-Controller)
Separate concerns for better maintainability:

\`\`\`javascript
// controllers/userController.js
const userService = require('../services/userService');

exports.getUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
\`\`\`

### Service Layer Pattern
Isolate business logic:

\`\`\`javascript
// services/userService.js
const User = require('../models/User');

class UserService {
  async createUser(userData) {
    const user = new User(userData);
    return await user.save();
  }

  async getUserById(id) {
    return await User.findById(id);
  }
}

module.exports = new UserService();
\`\`\`

## Performance Optimization

### Caching Strategies
- **Memory caching**: Redis or Memcached
- **HTTP caching**: Proper cache headers
- **Database query caching**: ORM-level caching

### Database Optimization
- **Connection pooling**: Manage database connections efficiently
- **Indexing**: Optimize query performance
- **Query optimization**: Use explain plans to identify bottlenecks

## Error Handling and Logging

### Centralized Error Handling
\`\`\`javascript
// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  
  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: 'Invalid input data' });
  }
  
  res.status(500).json({ error: 'Something went wrong!' });
};

module.exports = errorHandler;
\`\`\`

### Structured Logging
\`\`\`javascript
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});
\`\`\`

## Security Best Practices

1. **Input validation**: Always validate and sanitize user input
2. **Authentication**: Use JWT tokens or session management
3. **Rate limiting**: Prevent abuse with rate limiting middleware
4. **HTTPS**: Always use secure connections in production
5. **Environment variables**: Store sensitive data securely

## Monitoring and Observability

### Health Checks
\`\`\`javascript
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});
\`\`\`

### Performance Monitoring
- Use tools like New Relic, Datadog, or custom metrics
- Monitor response times, error rates, and throughput
- Set up alerts for critical metrics

## Conclusion

Building scalable Node.js applications requires careful planning and implementation of proven patterns. Focus on separation of concerns, performance optimization, and robust error handling to create applications that can grow with your needs.`,
    readTime: 10,
    author: {
      name: 'Michael Rodriguez',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    featured: true
  },
  {
    id: '4',
    title: 'The Future of Web Development in 2024',
    slug: 'future-web-development-2024',
    date: '2024-01-01',
    tags: ['Web Development', 'Trends', 'Future'],
    summary: 'Explore emerging trends and technologies shaping the future of web development in 2024 and beyond.',
    content: `# The Future of Web Development in 2024

As we move through 2024, the web development landscape continues to evolve at a rapid pace. Let's explore the key trends and technologies that are shaping the future of our industry.

## Emerging Technologies

### WebAssembly (WASM)
WebAssembly is revolutionizing web performance:
- **Near-native performance** for web applications
- **Language diversity** - write in Rust, C++, or Go
- **Advanced use cases** - gaming, image processing, scientific computing

### Edge Computing
Moving computation closer to users:
- **Reduced latency** for global applications
- **CDN evolution** beyond static asset delivery
- **Serverless at the edge** with platforms like Cloudflare Workers

## Framework Evolution

### Meta-Frameworks
Full-stack solutions are becoming mainstream:
- **Next.js** continues to lead with App Router
- **Nuxt.js** for Vue.js applications
- **SvelteKit** gaining momentum
- **Remix** focusing on web standards

### Component-First Development
- **Micro-frontends** for large-scale applications
- **Design systems** as code
- **Headless components** for maximum flexibility

## AI and Machine Learning Integration

### AI-Powered Development Tools
- **GitHub Copilot** and similar coding assistants
- **Automated testing** with AI-generated test cases
- **Code review** assistance and bug detection

### Client-Side AI
- **TensorFlow.js** for in-browser ML
- **Real-time processing** without server round-trips
- **Privacy-first** AI implementations

## Performance and User Experience

### Core Web Vitals Evolution
Google's focus on user experience metrics:
- **Largest Contentful Paint (LCP)**
- **First Input Delay (FID)**
- **Cumulative Layout Shift (CLS)**

### Progressive Web Apps (PWAs)
- **App-like experiences** on the web
- **Offline functionality** with service workers
- **Push notifications** for engagement

## Security and Privacy

### Zero-Trust Architecture
- **Assume breach** mentality
- **Micro-segmentation** of applications
- **Continuous verification** of users and devices

### Privacy-First Development
- **GDPR compliance** by design
- **Cookie-less tracking** alternatives
- **Client-side analytics** options

## Developer Experience

### DevOps and CI/CD
- **GitOps** workflows
- **Infrastructure as Code** (IaC)
- **Automated deployment** pipelines

### Development Environments
- **Cloud-based IDEs** like GitHub Codespaces
- **Container-based** development
- **Instant environment** provisioning

## Sustainability in Web Development

### Green Coding Practices
- **Carbon-aware** development
- **Efficient algorithms** and data structures
- **Optimized hosting** solutions

### Performance as Sustainability
- **Smaller bundle sizes** reduce energy consumption
- **Efficient caching** strategies
- **CDN optimization** for global distribution

## Conclusion

The future of web development is exciting and full of opportunities. By staying informed about these trends and continuously learning new technologies, developers can build better, faster, and more sustainable web applications.

Key takeaways:
1. **Embrace performance** - Users expect fast, responsive applications
2. **Think beyond the browser** - Consider edge computing and offline experiences
3. **Prioritize security** - Build with a security-first mindset
4. **Focus on sustainability** - Consider the environmental impact of your code
5. **Keep learning** - The industry moves fast, and continuous learning is essential

The web platform continues to evolve, and with it, the opportunities for creating amazing user experiences. Stay curious, experiment with new technologies, and always keep the user at the center of your development process.`,
    readTime: 12,
    author: {
      name: 'Emma Thompson',
      avatar: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    featured: false
  }
];

export const getAllPosts = () => {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};

export const getFeaturedPosts = () => {
  return blogPosts.filter(post => post.featured);
};

export const getPostsByTag = (tag) => {
  return blogPosts.filter(post => 
    post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
  );
};

export const getAllTags = () => {
  const tags = new Set();
  blogPosts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
};