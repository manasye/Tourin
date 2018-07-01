from bs4 import BeautifulSoup
from urllib.request import urlopen
import json
import datetime

def make_dict(flight_infos):
	result = dict()
	result['result'] = []
	for flight_info in flight_infos:
		for data in flight_info:
			ticket = dict()
			ticket["flight_id"] = data[0]
			ticket["airlines"] = data[1]
			ticket["price"] = data[2]
			ticket["dep_city"] = data[3]
			ticket["dep_time"] = data[4]
			ticket["arr_city"] = data[5]
			ticket["arr_time"] = data[6]
			result["result"].append(ticket)
	return result

def generate_url(range_date, dep_city, arr_city):
	urls = []
	
	for city in dep_city:
		for date in range_date:
			url = 'https://www.tiket.com/pesawat/cari?d=' + city + '&a=' + arr_city + '&date=' + date + '&adult=1&child=0&infant=0'
			urls.append(url)
	
	return urls

def get_flight_infos(url):
	flight_infos = []
	data_names = ['data-airlines', 'data-airlinesname', 'data-price']

	page = urlopen(url).read()
	soup = BeautifulSoup(page, 'html.parser')
	rows = soup.find_all('tr', {'class' : 'flight-rows'}) 
	
	for row in rows:
		td3 = row.find('td', {'class' : 'td3'})
		arr_city = td3.find('h5').text
		arr_time = td3.find('h4').text
		td2 = row.find('td', {'class' : 'td2'})
		dep_city = td2.find('h5').text
		dep_time = td2.find('h4').text
		# td8 = row.find('td', {'class' : 'td8'})
		# flight_mark = td8.find('div', {'class' : 'flight_mark'})
		# promo = flight_mark.find('div', {'class' : 'ribbon dash'})
		datas = [row.get(data) for data in data_names]
		datas.append(dep_city)
		datas.append(dep_time)
		datas.append(arr_city)
		datas.append(arr_time)
		# datas.append(promo)
		flight_infos.append(datas)
		
	return flight_infos

def print_flight_infos(flight_infos):
	for data in flight_infos:
		print(data)

def main():
	now = datetime.datetime.now()
	year = str(now.year)
	month = str(now.month)
	day = str(now.day)
	filename = day + '-' + month + '-' + year + '.json'

	dep_city = ['DPS', 'SUB', 'JOG', 'KNO']
	arr_city = 'CGK'
	range_date = ['2018-07-10']
	flight_infos_all = []

	urls = generate_url(range_date, dep_city, arr_city)
	for url in urls:
		print(url)
		flight_infos_all.append(get_flight_infos(url))
		print_flight_infos(get_flight_infos(url))
		print()
		print()
		
	result = make_dict(flight_infos_all)
	with open(filename, 'w') as outfile:
		json.dump(result, outfile)

if __name__ == "__main__":
	main() 	