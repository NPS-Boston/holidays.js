# holidays.js

### Holiday Helper functions
__NOTE: Only valid for legal federal holidays__

__ALSO: All references to holiday names use the official naming:__

* New Year’s Day
* Birthday of Martin Luther King, Jr.
* Washington’s Birthday
* Memorial Day
* Independence Day
* Labor Day
* Columbus Day
* Veterans Day
* Thanksgiving Day
* Christmas Day

Note apostrophe for New Year's Day and Washington's Birthday, as well as comma and abbreviation convention for Birthday of Martin Luther King, Jr.
By default the unicode u2019 right singled quotation is returned for New Year’s Day and Washington’s Birthday. Either u2019 or the ASCII u0027 can be input as strings for getting holiday Dates. These are official titles of the holidays.

-------
### Functions
-------
#### isHoliday(date)
##### Arguments:
  1. Date object - date you want to confirm if it is a holiday
##### Returns:
* If not a holiday: Boolean false
* If a holiday: String of legal federal holiday
-------
#### getHoliday(holiday,year)
##### Arguments:
  1. String - string of legal federal holiday
  2. Number - year in YYYY format
##### Returns:
* Date object of the holiday for the given calendar year.
* Boolean false is returned if input is not a holiday.
-------
### Helper functions used and available:
-------
#### getNthOfMonth(year,month,day,nth)
##### Arguments:
  1. Number - year in YYYY format
	2. Number - month as numerical representation (0-11, where 0 is January, 11 is December)
	3. Number - day of week as numerical representation (0-6, where 0 is Sunday, 6 is Saturday)
	4. Number - nth instance being sought.
##### Returns:
  * If exists: Date object of the nth instance of given month/year/day of week.
  * If does not exist: boolean false.
-------
#### getLastOfMonth
##### Arguments:
  1. Number - year in YYYY format
	2. Number - month as numerical representation (0-11, where 0 is January, 11 is December)
	3. Number - day of week as numerical representation (0-6, where 0 is Sunday, 6 is Saturday)
##### Returns:
  * Date object of the last day of the week in a given month (i.e. last Monday in May is Memorial Day)
