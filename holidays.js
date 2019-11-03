//Holiday Helper functions
//NOTE: Only valid for legal federal holidays
//ALSO: All references to holiday names use the official naming:
//
//		New Year’s Day
//		Birthday of Martin Luther King, Jr.
//		Washington’s Birthday
//		Memorial Day
//		Independence Day
//		Labor Day
//		Columbus Day
//		Veterans Day
//		Thanksgiving Day
//		Christmas Day
//
//	Note apostrophe for New Year's Day and Washington's Birthday, as well as comma and abbreviation convention for Birthday of Martin Luther King, Jr.
//	By default the unicode u2019 right singled quotation is returned for New Year’s Day and Washington’s Birthday.
//	Either u2019 or the ASCII u0027 can be input as strings for getting holiday Dates.
//	These are official titles of the holidays.
//
//
//Functions:
//
//	isHoliday
//		Arguments:	1) Date object - date you want to confirm if it is a holiday
//		Returns:	If not a holiday: Boolean false
//					If a holiday: String of legal federal holiday
//
//	getHoliday
//		Arguments:	1) String - string of legal federal holiday
//					2) Number - year in YYYY format
//		Returns:	Date object of the holiday for the given calendar year.
//					Boolean false is returned if input is not a holiday.
//
//
//Helper functions used and available:
//
//	getNthOfMonth
//		Arguments:	1) Number - year in YYYY format
//					2) Number - month as numerical representation (0-11, where 0 is January, 11 is December)
//					3) Number - day of week as numerical representation (0-6, where 0 is Sunday, 6 is Saturday)
//					4) Number - nth instance being sought.
//		Returns:	If exists: Date object of the nth instance of given month/year/day of week
//
//	getLastOfMonth
//		Arguments:	1) Number - year in YYYY format
//					2) Number - month as numerical representation (0-11, where 0 is January, 11 is December)
//					3) Number - day of week as numerical representation (0-6, where 0 is Sunday, 6 is Saturday)
//		Returns:	Date object of the nth instance of given month/year/day of week
//
//

function isHoliday(date)
{
	if(date.getMonth() == 0)//January
	{
		if(date.getDate() == 1)//New Year
		{
			return "New Year’s Day"
		}
		if(date.getDay() == 1 && date.getDate() >= 15 && date.getDate() <= 21 )//MLK - third monday
		{
			return "Birthday of Martin Luther King, Jr."
		}
	}
	if(date.getMonth() == 1)//Feb
	{
		if(date.getDay() == 1 && date.getDate() >= 15 && date.getDate() <= 21 )//Washington's Birthday - third monday
		{
			return "Washington’s Birthday"
		}
	}
	if(date.getMonth() == 4)//May
	{
		if(date.getDay() == 1 && date.getDate() >= 25 && date.getDate() <= 31 )//Memorial Day - last Monday
		{
			return "Memorial Day"
		}
	}
	if(date.getMonth() == 6)//July
	{
		if(date.getDate() == 4)//Independence day
		{
			return "Independence Day"
		}
	}
	if(date.getMonth() == 8)//September
	{
		if(date.getDay() == 1 && date.getDate() >= 1 && date.getDate() <= 7 )//Labor Day - first Monday
		{
			return "Labor Day"
		}
	}
	if(date.getMonth() == 9)//October
	{
		if(date.getDay() == 1 && date.getDate() >= 8 && date.getDate() <= 14 )//October holiday - second Monday
		{
			return "Columbus Day"
		}
	}
	if(date.getMonth() == 10)//November
	{
		if(date.getDate() == 11)//Veterans Day
		{
			return "Veterans Day"
		}
		if(date.getDay() == 4 && date.getDate() >= 22 && date.getDate() <= 28 )//Thanksgiving
		{
			return "Thanksgiving Day"
		}
	}
	if(date.getMonth() == 11)//Dec
	{
		if(date.getDate() == 25)//xmas
		{
			return "Christmas Day"
		}
	}
	return false
}

function getNthOfMonth(year,month,dayOfWeek,nth)
{
	var d = 0
	var date
	while(nth)
	{
		d++
		date = new Date(year,month,d)
		if(date.getDay() == dayOfWeek)
		{
			nth--
		}
	}
	if(date.getMonth() == month)//if the nth day is beyond the month itself, Date obj will go into next month. If so, we don't have the nth day.
	{
		return date
	}
	else
	{
		return false
	}
}
function getLastOfMonth(year,month,dayOfWeek)
{
	var nth = 1
	var d = new Date(year,month+1,0).getDate() //last day of the month
	var date
	while(nth)
	{
		date = new Date(year,month,d--)
		if(date.getDay() == dayOfWeek && date.getMonth() == month)
		{
			nth--
		}
	}
	return date
}
function getHoliday(hol,year)
{
	if(!hol || !year)
	{
		return false
	}
	switch(hol)
	{
		case "New Year's Day":
		case "New Year’s Day":
			return new Date(year,0,1)
		case "Birthday of Martin Luther King, Jr.":
			return getNthOfMonth(year,0,1,3)
			break;
		case "Washington's Birthday":
		case "Washington’s Birthday":
			return getNthOfMonth(year,1,1,3)
			break;
		case "Memorial Day":
			return getLastOfMonth(year,4,1)
			break;
		case "Independence Day":
			return new Date(year,6,1)
			break;
		case "Labor Day":
			return getNthOfMonth(year,8,1,1)
			break;
		case "Columbus Day":
			return getNthOfMonth(year,9,1,2)
			break;
		case "Veterans Day":
			return new Date(year,10,11)
			break;
		case "Thanksgiving Day":
			return getNthOfMonth(year,10,4,4)
			break;
		case "Christmas Day":
			return new Date(year,11,25)
			break;
		default:
			return false;
			break;
	}
}