def decide_fix(issue):
    if issue["type"] == "LINTING":
        return "remove_unused_import"
    if issue["type"] == "SYNTAX":
        return "fix_syntax"
    return "needs_reasoning"
