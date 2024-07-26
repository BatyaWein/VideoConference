import { observer } from "mobx-react-lite"
import { Participant } from "../entities/Participant"
import { Card, CardContent, CardMedia, Chip, Stack, SxProps, Typography } from "@mui/material"
import { useMainStore } from "../context/Main"
import MicOffIcon from '@mui/icons-material/MicOff'
import MicIcon from '@mui/icons-material/Mic'

interface ParticipantCardProps { participant: Participant, sx?: SxProps }

const ParticipantCard = observer(({ participant, sx }: ParticipantCardProps) => {
    const { userId } = useMainStore()
    const isMyCard = participant.id === userId
    const chipBgColor = isMyCard ? 'info' : 'secondary'
    const chipLabel = `${isMyCard ? 'אני - ' : ''}${participant.role}`

    return (
        <Card sx={{ height: '100%', mx: 2, position: 'relative', overflow: 'hidden', flex: 1, flexDirection: 'column', ...sx }}>
           {participant.isCamera&& <CardMedia
                component="img"
                image={participant.image}
                alt={participant.name}
                width='100%'
                sx={{ flexGrow: 1, objectFit: 'cover', objectPosition: 'center', height: 'auto' }}
            />}
            <Chip color={chipBgColor} label={chipLabel} sx={{ position: 'absolute', right: 16, top: 16, color: 'primary.main' }} />
            <CardContent sx={{ p: '0 !important', height: 44, position: 'absolute', bottom: 0, width: '100%', }}>
                <Stack direction='row' height='100%' justifyContent='space-between' alignItems='center' px={2} sx={{ bgcolor: 'primary.main', opacity: 0.8 }}>
                    <Stack sx={{ px: 2, height: '100%', justifyContent: 'center' }}>
                        <Typography variant="body2" color='text.primary' fontWeight='bold'> {participant.description}</Typography>
                        <Typography variant="body2" color='text.secondary'>
                            {participant.title} {participant.name}
                        </Typography>
                    </Stack>
                    {participant.isMute ? <MicOffIcon color="secondary" /> : <MicIcon color="secondary" />}
                </Stack>
            </CardContent>
        </Card >
    )
})

export default ParticipantCard