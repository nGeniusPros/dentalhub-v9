# Contributing to DentalHub V9

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/nGeniusPros/dentalhub-v9.git
cd dentalhub-v9
```

2. Install dependencies
```bash
npm install
```

3. Create a new branch
```bash
git checkout feature/deepseek-stable
git checkout -b feature/your-feature-name
```

## Development Process

### 1. Code Style
- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### 2. Component Guidelines
- Use functional components with hooks
- Implement proper error handling
- Add loading states where necessary
- Make components responsive
- Follow accessibility best practices

### 3. Testing
- Write unit tests for utilities and hooks
- Add integration tests for complex features
- Test edge cases and error scenarios
- Ensure accessibility compliance

### 4. Git Workflow
Refer to [Git Workflow Guidelines](./docs/GIT_WORKFLOW.md) for detailed information.

### 5. Pull Requests
- Keep changes focused and small
- Add meaningful descriptions
- Link related issues
- Request reviews from team members
- Address review comments promptly

## Project Structure

```
src/
├── components/
│   ├── shared/      # Reusable components
│   └── features/    # Feature-specific components
├── hooks/           # Custom React hooks
├── lib/            # Utilities and configurations
├── pages/          # Page components
├── routes/         # Route configurations
├── styles/         # Global styles and themes
└── types/          # TypeScript type definitions
```

## Environment Setup

1. Required Tools
- Node.js (LTS version)
- npm
- Git
- VS Code (recommended)

2. VS Code Extensions
- ESLint
- Prettier
- GitLens
- TypeScript and JavaScript Language Features

3. Environment Variables
Create a `.env.local` file:
```
VITE_API_URL=your_api_url
DEEPSEEK_API_KEY=your_api_key
```

## Common Tasks

### Adding a New Feature
1. Create feature branch
2. Implement changes
3. Add tests
4. Update documentation
5. Create pull request

### Fixing Bugs
1. Create bugfix branch
2. Add failing test
3. Fix the bug
4. Verify tests pass
5. Create pull request

### Updating Dependencies
1. Create chore branch
2. Update packages
3. Test thoroughly
4. Create pull request

## Need Help?
- Check existing issues
- Review documentation
- Ask team members
- Create detailed bug reports

## Code Review Process
1. Self-review your changes
2. Request review from team
3. Address feedback
4. Update PR as needed
5. Merge when approved

## Release Process
1. Update version number
2. Create release branch
3. Run full test suite
4. Create release tag
5. Deploy to staging
6. Verify in staging
7. Deploy to production

Remember to always follow the project's coding standards and best practices!
