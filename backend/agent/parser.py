import re

def parse(pytest_output):
    issues = []

    for line in pytest_output.splitlines():
        if "unused import" in line:
            issues.append({
                "type": "LINTING",
                "message": line
            })
        if "SyntaxError" in line:
            issues.append({
                "type": "SYNTAX",
                "message": line
            })

    return issues
