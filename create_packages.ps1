$res = Get-Content includes\\cgmInjected.js | Select-String "debug: false" -quiet
if ($res -eq $TRUE) {
Write-Host "Debug is false"
$OperaCmd = "7z a -tzip -r CGM.oex LICENSE.GPL README.markdown CHANGELOG icons includes popup.html common.js index.html config.xml"
$ChromeCmd = "7z a -tzip -r CGM.zip LICENSE.GPL README.markdown CHANGELOG icons includes popup.html common.js background.html manifest.json _locales"
invoke-expression "cmd /c $OperaCmd"
invoke-expression "cmd /c $ChromeCmd"

}
else {Write-Host "Debug is true! Aborting..."}