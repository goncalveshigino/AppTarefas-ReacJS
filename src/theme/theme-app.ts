import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
	styles: {
		global: {
			body: {
				bg: "main.background",
				color: "main.text",
			},
		},
	},

	fonts: {
		heading: "open sans",
		body: "poppins",
	},

	colors: {
		main: {
			principal: "#FFFFFF",
			bg: "#F9F9F9",
			text: "#222222",
			sideBar: "#F9F9F9",
		},
		inputbg: '#EFEFEF',
		text: '#2D3748'
	},

	radii: {
		none: 0,
		200: "6px",
		full: "9999px",
	},
})
