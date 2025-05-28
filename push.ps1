git update-index --assume-unchanged push.ps1
git add .
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git commit -m "Auto update on $timestamp"
git push 