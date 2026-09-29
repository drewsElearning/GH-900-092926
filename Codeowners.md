# Code Owners Template

Use a `CODEOWNERS` file to assign people or teams as reviewers for files in this repository. GitHub requests reviews from the listed owners when a pull request changes files they own.

## Setup

1. Copy the example below into a plain-text file named `CODEOWNERS`.
2. Replace each placeholder with a GitHub username (for example, `@octocat`) or a team (for example, `@example-org/docs-team`).
3. Commit the file in one of GitHub's supported locations: `.github/CODEOWNERS`, `CODEOWNERS`, or `docs/CODEOWNERS`.
4. Confirm that each listed user or team has write access to the repository. Teams must be visible to the repository.

## Example `CODEOWNERS`

```text
# Default owners for everything in the repository
*                       @ORG/TEAM

# Documentation
/README.md              @ORG/DOCS-TEAM
/docs/                  @ORG/DOCS-TEAM

# Application source
/src/                   @ORG/ENGINEERING-TEAM

# Build and automation files
/.github/               @ORG/DEVOPS-TEAM
/.github/workflows/     @ORG/DEVOPS-TEAM
```

## Syntax Notes

- Use one rule per line: a file pattern followed by one or more GitHub usernames or teams.
- Patterns use `.gitignore`-style matching. A leading `/` anchors a pattern to the repository root; a trailing `/` matches a directory.
- Lines beginning with `#` are comments.
- When multiple rules match a file, the last matching rule takes precedence. Put broad defaults first and more specific overrides later.
- Owners are requested as reviewers; a `CODEOWNERS` entry does not automatically approve or merge a pull request.

## Checklist

- [ ] Every placeholder has been replaced with a valid username or team.
- [ ] Owners have write access to the repository.
- [ ] Rules cover the intended files and directories.
- [ ] Specific rules appear after any broad rules they override.
- [ ] The file is named exactly `CODEOWNERS` and is in a supported location.
