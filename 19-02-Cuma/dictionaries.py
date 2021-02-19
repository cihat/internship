# key: value şeklinde ve key'ler benzersiz olmalıdır.
# dictionaries that means for js objects
monthConversions = {
    "Jan": "January",
    "Jan": "February",
    "Mar": "March",
    "Apr": "April",
    "May": "May",
    "Jun": "July",
    "Aug": "August",
    "Sep": "September",
    "Oct": "October",
    "Nov": "November",
    "Dec": "December",
}

print(monthConversions["Nov"])
print(monthConversions.get("Dec"))
print(monthConversions.get("Dec"))
print(monthConversions.get("Luv", "Not a valid key"))