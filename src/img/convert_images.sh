#!/bin/bash

# Указываем абсолютный путь к директориям с изображениями
EMOTION_DIR="/c/martspec/martspec/src/img/page/emotion"
VITAMIN_DIR="/c/martspec/martspec/src/img/page/vitamin"

# Проверяем существование директорий и конвертируем изображения
if [ -d "$EMOTION_DIR" ] && [ -d "$VITAMIN_DIR" ]; then
    # Конвертация изображений в формат WebP с помощью cwebp
    for file in "$EMOTION_DIR"/*.png; do
        cwebp -q 80 "$file" -o "${file%.png}.webp"
    done

    for file in "$VITAMIN_DIR"/*.png; do
        cwebp -q 80 "$file" -o "${file%.png}.webp"
    done

    echo "Конвертация изображений в формат WebP завершена."
else
    echo "Ошибка: Не удалось найти директории $EMOTION_DIR и/или $VITAMIN_DIR."
fi
