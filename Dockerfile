FROM node:20.9-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

# Install OpenJDK (required for Android SDK)
RUN apk --no-cache add openjdk11

# Download and install specific version of Android command line tools
ENV ANDROID_SDK_ROOT /opt/android-sdk
ENV PATH ${PATH}:${ANDROID_SDK_ROOT}/cmdline-tools/latest/bin:${ANDROID_SDK_ROOT}/platform-tools:${ANDROID_SDK_ROOT}/tools/bin

RUN mkdir -p ${ANDROID_SDK_ROOT} && \
    wget https://dl.google.com/android/repository/commandlinetools-linux-7302050_latest.zip -O /tmp/android-sdk.zip && \
    unzip /tmp/android-sdk.zip -d ${ANDROID_SDK_ROOT} && \
    rm /tmp/android-sdk.zip && \
    mv ${ANDROID_SDK_ROOT}/cmdline-tools/* ${ANDROID_SDK_ROOT} && \
    rmdir ${ANDROID_SDK_ROOT}/cmdline-tools

# Create a file with accepted licenses
RUN mkdir -p /root/.android && touch /root/.android/repositories.cfg && \
    echo "24333f8a63b6825ea9c5514f83c2829b004d1fee" > /root/.android/repositories.cfg

# Install required Android SDK components using the sdkmanager script
RUN yes | ${ANDROID_SDK_ROOT}/cmdline-tools/latest/bin/sdkmanager --install "platform-tools" "platforms;android-29" "build-tools;29.0.3"

EXPOSE 19000
EXPOSE 19001

# Add this line at the end of your Dockerfile
CMD [ "/bin/sh" ]

CMD [ "npx", "expo", "start", "--host", "lan" ]


