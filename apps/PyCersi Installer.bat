@echo off
chcp 65001 >nul
color 0a
title PyCersi Installer

echo ============================================================
echo                  PyCersi Installation Script
echo ============================================================
echo.
echo  Checking Python and pip installation...
echo ------------------------------------------------------------
python --version
pip --version
echo ------------------------------------------------------------
echo.

echo  Installing PyCersi...
echo ------------------------------------------------------------
python -m pip install pycersi
echo ------------------------------------------------------------
echo.

echo ============================================================
echo  Latest version of PyCersi has been successfully installed!
echo  Thank you for installing PyCersi. Enjoy coding!
echo ============================================================
echo.

echo  © 2024-2025 PyCersi. All rights reserved.
pause
