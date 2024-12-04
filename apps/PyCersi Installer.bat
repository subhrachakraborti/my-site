@echo off
chcp 65001 >nul
color 0a
title PyCersi Installer

:: Introduction
cls
echo ============================================================
echo               🚀 Welcome to the PyCersi Installer 🚀
echo               ~ "A Universe of Coding Awaits!" ~
echo ============================================================
echo.
echo            Initializing PyCersi Installation Module...
ping -n 3 127.0.0.1 >nul

:: Starry Sky Animation
cls
echo ============================================================
echo                        Preparing the Galaxy...
echo ============================================================
for /l %%i in (1,1,100) do (
    cls
    echo ============================================================
    echo                    Preparing the Galaxy...
    echo ============================================================
    echo                        .       *         .  
    echo            *        .         *       .
    echo     .           *   Preparing PyCersi       .
    echo       *       *      Installation...      *
    echo             .        Step %%i of 100      .
    ping -n 1 127.0.0.1 >nul
)

:: Python and pip check
cls
echo ============================================================
echo                 🛰️ Verifying System Readiness 🛰️
echo ============================================================
echo.
echo            🚀 Checking Python and pip installation...
echo ------------------------------------------------------------
python --version
if %errorlevel% neq 0 (
    echo ❌ ERROR: Python is not installed or not in PATH.
    echo Please install Python and ensure it is added to the system PATH.
    python
    pause
    exit /b
)
pip --version
if %errorlevel% neq 0 (
    echo ❌ ERROR: pip is not installed or not in PATH.
    echo Please install pip and ensure it is added to the system PATH.
    python
    pause
    exit /b
)
echo ------------------------------------------------------------
echo ✅ Python and pip are ready for liftoff!
echo.
ping -n 4 127.0.0.1 >nul

:: Installing PyCersi
cls
echo ============================================================
echo                 🚀 Launching PyCersi Installation 🚀
echo ============================================================
echo                     Installing PyCersi modules...
echo ------------------------------------------------------------
python -m pip install pycersi
if %errorlevel% neq 0 (
    echo ❌ ERROR: Failed to install PyCersi. Check your internet connection or pip configuration.
    pause
    exit /b
)
echo ------------------------------------------------------------
echo ✅ PyCersi installation completed successfully!
ping -n 3 127.0.0.1 >nul

:: Completion Message with Space Animation
cls
for /l %%x in (1,1,5) do (
    cls
    echo ============================================================
    echo            PyCersi has been successfully installed! 🚀
    echo ============================================================
    echo                Exploring infinite possibilities...
    echo ============================================================
    echo.
    echo       *          .       *         🚀         .      *      
    echo   .         Thank you for joining the PyCersi galaxy!     .
    echo        .       *               *            .      *
    ping -n 2 127.0.0.1 >nul
)

:: Final Acknowledgment
cls
echo ============================================================
echo            PyCersi has been successfully installed! 🚀
echo ============================================================
echo   Thank you for installing PyCersi. Enjoy coding among stars!
echo ============================================================
echo.
echo                © 2024-2025 PyCersi. All rights reserved.
echo ============================================================
pause