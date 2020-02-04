def toText(morse):
	MORSE_CODE_DICT={'.-'    :'A','-...'   :'B'
					,'-.-.'  :'C','-..'    :'D','.'     :'E'
					,'..-.'  :'F','--.'    :'G','....'  :'H'
					,'..'    :'I','.---'   :'J','-.-'   :'K'
					,'.-..'  :'L','--'     :'M','-.'    :'N'
					,'---'   :'O','.--.'   :'P','--.-'  :'Q'
					,'.-.'   :'R','...'    :'S','-'     :'T'
					,'..-'   :'U','...-'   :'V','.--'   :'W'
					,'-..-'  :'X','-.--'   :'Y','--..'  :'Z'
					,'.----' :'1','..---'  :'2','...--' :'3'
					,'....-' :'4','.....'  :'5','-....' :'6'
					,'--...' :'7','---..'  :'8','----.' :'9'
					,'-----' :'0','--..--' :',','.-.-.-':'.'
					,'..--..':'?','-..-.'  :'/','-....-':'-'
					,'-.--.' :'(','-.--.-' :')'}
	MCD=MORSE_CODE_DICT
	C=morse.split()
	L=len(C)
	ans=list(range(L))
	for i in range(L):
		if(C[i] in MCD):
			ans[i]=MCD.get(C[i])
		elif(C[i]=='/'):
			ans[i]=' '
		else:
			ans[i]=C[i]
	return ''.join(ans)
morse=input("Enter The Morse-Code To Translate Into Message:\n")
print("Message:")
print(toText(morse))