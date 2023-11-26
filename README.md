# Instalacja środowiska

## Node.js
#### Windows
**1. Pobranie Node.js**
Na początku trzeba zainstalować środowisko Node.js, wchodzimy w link: https://nodejs.org/en/download i pobieramy.
<p>
  <img src='./assets/readme/npm-install.jpg'>
</p>

**2. Instalacja**
Postępujemy zgodnie z instrukcjami na ekranie. 

**3. Spradzenie poprawności instalacji**
Po zakończeniu sprawdzamy czy Node.js został poprawnie zainstalowany wpisująć następujące polecenie w wierszu poleceń (cmd):

`node -v`

Powinna pojawić się obecna wersja node.js
<p>
  <img src='./assets/readme/node-v.jpg'>
</p>

#### Linux
**1. Instalacja** 
Instalujemy Node.js z poziomu terminala:
`sudo apt update`
`sudo apt install nodejs`
**2. Spradzenie poprawności instalacji**
Następnie sprawdzamy czy środowisko zostało poprawnie zainstalowane:
`node -v`

## Emulator
#### Windows
**1. Pobierz Android Studio**
Przejdź na oficjalną stronę Android Studio https://developer.android.com/studio i pobierz najnowszą wersję.
<p>
  <img src='./assets/readme/install-android-studio.jpg'>
</p>

**2. Zainstaluj Android Studio**
Po pobraniu uruchom instalator i postępuj zgodnie z instrukcjami na ekranie.

**3. Uruchom Android Studio**
Po instalacji uruchom Android Studio. Po pierwszym uruchomieniu program poprosi Cię o skonfigurowanie środowiska. Postępuj zgodnie z instrukcjami, w tym instalacją niezbędnych komponentów.

**4. Otwórz AVD Manager**
<p align='center'>
  <img src='./assets/readme/go-to-avd1.jpg' style='width:49%'>
  <img src='./assets/readme/go-to-avd2.jpg' style='width:49%'>
</p>

**5. Dodaj nowy emulator**
Kliknij przycisk "Create Virtual Device".
<p align='center'>
  <img src='./assets/readme/create-device.jpg'>
</p>

**6. Wybierz urządzenie**
Wybierz urządzenie, dla którego chcesz utworzyć emulator. Następnie postępuj zgodnie z instrukcjami kreatora.
<p align='center'>
  <img src='./assets/readme/choose-a-device-definition.jpg'>
</p>

**7. Wybierz obraz systemu Android:**
Wybierz obraz systemu Android, który chciałbyś zainstalować na swoim emulatorze. Możesz wybrać oficjalne obrazy udostępniane przez Google.
<p align='center'>
  <img src='./assets/readme/select-a-system-image.jpg'>
</p>

**8.Skonfiguruj emulator**
Skonfiguruj dodatkowe opcje, takie jak ilość dostępnej pamięci RAM dla emulatora.
<p align='center'>
  <img src='./assets/readme/show-advanced-settings.jpg' style='width: 50%'>
  <img src='./assets/readme/memory-and-storage.jpg' style='width: 48%'>
</p>

**10.Zakończ konfigurację**
Po zakończeniu konfiguracji, kliknij "Finish", aby zakończyć proces tworzenia emulatora.
<p align='center'>
  <img src='./assets/readme/finish.jpg'>
</p>

**11. Uruchom emulator**
Wróć do AVD Manager, zaznacz stworzony emulator i kliknij przycisk "Play", aby uruchomić emulator.
<p align='center'>
  <img src='./assets/readme/launch-device.jpg'>
</p>

#### Linux
**1. Pobierz Android Studio**
Otwórz terminal i użyj poleceń do pobrania i rozpakowania Android Studio.
`wget https://redirector.gvt1.com/edgedl/android/studio/ide-zips/4.2.2.0/android-studio-ide-202.7486908-linux.tar.gz`
`tar -xzvf android-studio-ide-202.7486908-linux.tar.gz`

**2. Uruchom Android Studio**
Wejdź do katalogu, w którym rozpakowano Android Studio, a następnie uruchom studio.sh
`cd android-studio/bin`
`./studio.sh`

**3. Skonfiguruj Android Studio**
Po pierwszym uruchomieniu, postępuj zgodnie z instrukcjami kreatora konfiguracji środowiska programistycznego.

Następnie przejdź do 4.kroku instrukcji windowsa i postępuj identycznie.