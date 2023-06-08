import requests
from bs4 import BeautifulSoup

sitemap_url = "https://martspec.com/sitemap.xml"

response = requests.get(sitemap_url)
sitemap = response.text

soup = BeautifulSoup(sitemap, "xml")

urls = soup.find_all("loc")

results = {}  # Инициализация пустого словаря для хранения результатов проверки ссылок

for url in urls:
    url = url.text
    response = requests.head(url)
    status_code = response.status_code
    results[url] = status_code

# Открытие файла для записи результатов
with open("results.txt", "w") as file:
    for url, status_code in results.items():
        file.write(f"URL: {url}, Status Code: {status_code}\n")

print("Результаты проверки сохранены в файл results.txt")
