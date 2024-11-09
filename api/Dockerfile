# Utilizar a imagem PHP com FPM
FROM php:8.3-fpm

# Instalar dependências e extensões PHP
RUN apt-get update && apt-get install -y \
    libzip-dev \
    unzip \
    git \
    && docker-php-ext-install zip pdo_mysql

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Definir o diretório de trabalho
WORKDIR /var/www/html

# Instalar dependências do Laravel
COPY . .
RUN composer install

# Definir permissões de pasta
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html/storage

CMD ["php-fpm"]
