export function MainButton() {
	return (
		<>
			<button
				style={{
                    border:'none',
                    backgroundColor:'black',
                    display:'flex',
                    alignItems:'center',
					padding: '0',
					position: 'relative',
					width: '204px',
					height: '66px',
				}}
			>
				<div
					style={{
                        
                        position:'absolute',
						width: '100%',
						height: '56px',
						backgroundColor: '#0DBA33',
						zIndex: 1,
					}}
				>         
                </div>
				<div
					style={{
                        marginLeft:'3px',
                        position:'absolute',
						width: '194px',
						height: '100%',
						backgroundColor: '#6FFF8E',
						zIndex: 1,
					}}
				>         
                </div>

			</button>
		</>
	)
}
