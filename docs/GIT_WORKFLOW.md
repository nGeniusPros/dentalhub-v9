# Git Workflow Guidelines

## Branch Structure
```
main (production)
├── feature/deepseek-stable (stable version)
│   ├── feature/new-feature-1
│   └── feature/new-feature-2
└── hotfix/urgent-fix
```

## Branch Types
- `main` - Production-ready code
- `feature/*` - New features
- `bugfix/*` - Bug fixes
- `hotfix/*` - Urgent production fixes
- `release/*` - Release preparation

## Development Workflow

### 1. Starting New Feature
```bash
# Start from stable version
git checkout feature/deepseek-stable

# Create new feature branch
git checkout -b feature/your-feature-name
```

### 2. Daily Development
```bash
# Update your branch with latest changes
git pull origin feature/deepseek-stable

# Stage changes
git add .

# Commit with conventional commit message
git commit -m "type: description"

# Push changes
git push origin feature/your-feature-name
```

### 3. Commit Message Convention
Format: `type: subject`

Types:
- `feat:` - New feature
- `fix:` - Bug fix
- `refactor:` - Code restructuring
- `style:` - Formatting changes
- `docs:` - Documentation
- `test:` - Test additions/changes
- `chore:` - Build/dependency updates

Examples:
```bash
git commit -m "feat: add patient appointment reminder system"
git commit -m "fix: resolve appointment overlap issue"
git commit -m "docs: update API documentation"
```

### 4. Pull Request Process
1. Update your branch with the latest changes
   ```bash
   git checkout feature/your-feature-name
   git pull origin feature/deepseek-stable
   ```

2. Resolve any conflicts
3. Push your changes
4. Create Pull Request on GitHub
5. Wait for code review and approval
6. Merge only when CI passes and approved

### 5. Version Tagging
```bash
# Create new version tag
git tag -a v1.x.x -m "version description"

# Push tag to remote
git push origin v1.x.x
```

### 6. Emergency Rollback
```bash
# Revert to stable tag
git checkout main
git reset --hard v1.0.0-20250215
git push -f origin main  # Use with caution!
```

## Best Practices

### Code Review
- All changes must be reviewed
- Keep PRs small and focused
- Use descriptive PR titles and descriptions
- Link PRs to relevant issues

### Branch Management
- Delete branches after merging
- Keep branches up to date
- Don't rewrite public history
- Use meaningful branch names

### Security
- Never commit sensitive data
- Use environment variables for secrets
- Regular security audits
- Keep dependencies updated

## Tools and Automation
- GitHub Actions for CI/CD
- Husky for pre-commit hooks
- ESLint for code quality
- Prettier for code formatting
