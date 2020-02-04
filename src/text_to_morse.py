def toMorse(text):
	MORSE_CODE_DICT={'A':    '.-','B':  '-...'
					,'C':  '-.-.','D':   '-..','E':     '.'
					,'F':  '..-.','G':   '--.','H':  '....'
					,'I':    '..','J':  '.---','K':   '-.-'
					,'L':  '.-..','M':    '--','N':    '-.'
					,'O':   '---','P':  '.--.','Q':  '--.-'
					,'R':   '.-.','S':   '...','T':     '-'
					,'U':   '..-','V':  '...-','W':   '.--'
					,'X':  '-..-','Y':  '-.--','Z':  '--..'
					,'1': '.----','2': '..---','3': '...--'
					,'4': '....-','5': '.....','6': '-....'
					,'7': '--...','8': '---..','9': '----.'
					,'0': '-----',',':'--..--','.':'.-.-.-'
					,'?':'..--..','/': '-..-.','-':'-....-'
					,'(': '-.--.',')':'-.--.-'}
	MCD=MORSE_CODE_DICT
	text=' '.join(text.upper().split())
	L=len(text)
	ans=list(range(L))
	for i in range(L):
		C=text[i]
		if(C in MCD):
			ans[i]=MCD.get(C)
		elif(C==' '):
			ans[i]='/'
		else:
			ans[i]=C
	return ' '.join(ans)
text=input("Enter The Message To Translate Into Morse-Code:\n")
print("Morse-Code:")
print(toMorse(text))