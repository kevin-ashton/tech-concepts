#!/usr/bin/env bash

echo Build Widgets

echo Building binary...
gsed -i "1s/.*/import { AppModule } from '.\/binary\/app.module';/" src/main.ts
yarn --cwd ./builder build
cp ./dist/shared.min.js ../widgets/shared/shared.min.js
cp ./dist/builder/main.js ../widgets/binary/binary.min.js

echo Building ascii...
gsed -i "1s/.*/import { AppModule } from '.\/ascii\/app.module';/" src/main.ts
yarn --cwd ./builder build
cp ./dist/shared.min.js ../widgets/shared/shared.min.js
cp ./dist/builder/main.js ../widgets/ascii/ascii.min.js

