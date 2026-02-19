import subprocess
import json
import sys

proc = subprocess.run(
    ["pytest"],
    capture_output=True,
    text=True
)

output = {
    "returncode": proc.returncode,
    "stdout": proc.stdout,
    "stderr": proc.stderr
}

print(json.dumps(output))
sys.exit(proc.returncode)
